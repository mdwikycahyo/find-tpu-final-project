const request = require("supertest");
const app = require("../app");
const { encode } = require("../helpers/bcrypt");
const KeeperModel = require("../models/keeperModel");

jest.mock("../models/keeperModel");

const urlEndpoint = "/keeper/login";

const caseSuccess = {
  email: "wiz.khalifa@mail.com",
  password: "wizkhalifa",
};

const caseFail1 = { ...caseSuccess, email: "" };
const caseFail2 = { ...caseSuccess, password: "" };
const caseFail3 = { ...caseSuccess, email: "impostor@mail.com" };
const caseFail4 = { ...caseSuccess, password: "impostor" };

beforeAll(async () => {
  const inputData = await KeeperModel.createKeeper({
    cemetaryName: "TPU Cilincing",
    cemetaryLocation: "North Jakarta",
    width: 10,
    height: 10,
    latitude: "-6.4286981999999995",
    longitude: "106.8265268",
    image_url: [
      "https://cdn-2.tstatic.net/surabaya/foto/bank/images/fakta-di-balik-video-kuburan-keluarkan-api-misterius-viral-di-instagram.jpg",
    ],
    price: 800000,
    keeperName: "Wiz Khalifa",
    keeperEmail: "wiz.khalifa@mail.com",
    keeperPassword: encode("wizkhalifa"),
    keeperPhone: "089999999999",
    spaceLeft: 100,
    spaceFilled: 0,
    facilities: ["Tenda", "Bunga", "Air"],
  });
});

describe("POST Login Keeper | Success case", () => {
  test("Return access_token", (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseSuccess)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("access_token", expect.any(String));
        done();
      });
  });
});

describe("POST Login Keeper | Failed case", () => {
  test("Error 400: Jika email tidak diisi", (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail1)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Email tidak boleh kosong!");
        done();
      });
  });

  test("Error 400: Jika password tidak diisi", (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail2)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Password tidak boleh kosong!"
        );
        done();
      });
  });

  test("Error 400: Jika email salah atau tidak ada di database", (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail3)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Email / password yang Anda masukkan salah!"
        );
        done();
      });
  });

  test("Error 400: Jika password salah", (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail4)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Email / password yang Anda masukkan salah!"
        );
        done();
      });
  });
});
