const request = require("supertest");
const app = require("../app");
const { encode } = require("../helpers/bcrypt");
const KeeperModel = require("../models/keeperModel");

jest.mock("../models/keeperModel");

let sampleId;

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
  sampleId = inputData.ops[0]._id;
});

describe("GET Cemetery data by ID | Success case", () => {
  test(`Show particular cemetery data`, (done) => {
    request(app)
      .get("/keeper/" + sampleId)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("_id", expect.any(String));
        expect(res.body).toHaveProperty("cemetaryName", expect.any(String));
        expect(res.body).toHaveProperty("cemetaryLocation", expect.any(String));
        expect(res.body).toHaveProperty("width", expect.any(Number));
        expect(res.body).toHaveProperty("height", expect.any(Number));
        expect(res.body).toHaveProperty("latitude", expect.any(String));
        expect(res.body).toHaveProperty("longitude", expect.any(String));
        expect(res.body).toHaveProperty(
          "image_url",
          expect.arrayContaining([expect.any(String)])
        );
        expect(res.body).toHaveProperty("price", expect.any(Number));
        expect(res.body).toHaveProperty("keeperName", expect.any(String));
        expect(res.body).toHaveProperty("keeperEmail", expect.any(String));
        expect(res.body).toHaveProperty("keeperPassword", expect.any(String));
        expect(res.body).toHaveProperty("keeperPhone", expect.any(String));
        expect(res.body).toHaveProperty("spaceLeft", expect.any(Number));
        expect(res.body).toHaveProperty("spaceFilled", expect.any(Number));
        expect(res.body).toHaveProperty("spaceFilled", expect.any(Number));
        expect(res.body).toHaveProperty(
          "facilities",
          expect.arrayContaining([expect.any(String)])
        );
        expect(res.body).toHaveProperty("cemetarySpaceId", expect.any(String));
        expect(res.body).toHaveProperty("cemetarySpace", expect.any(Object));
        done();
      });
  });
});

describe("GET Cemetery data by ID | Failed case", () => {
  test(`Show particular cemetery data`, (done) => {
    request(app)
      .get("/keeper/" + "aa")
      .then((res) => {
        expect(res.status).toBe(404);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Data tidak ditemukan!");
        done();
      });
  });
});
