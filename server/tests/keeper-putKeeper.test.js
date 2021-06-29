const request = require("supertest");
const app = require("../app");
const { encode } = require("../helpers/bcrypt");
const KeeperModel = require("../models/keeperModel");

jest.mock("../models/keeperModel");

let sampleId;

const caseSuccess = {
  cemetaryName: "TPU Cisauk",
  cemetaryLocation: "Cisauk Wonderland",
  width: 10,
  height: 10,
  latitude: "-6.4286981999999995",
  longitude: "106.8265268",
  image_url: [
    "https://cdn-2.tstatic.net/surabaya/foto/bank/images/fakta-di-balik-video-kuburan-keluarkan-api-misterius-viral-di-instagram.jpg",
  ],
  price: 800000,
  keeperName: "Burj Khalifa",
  keeperEmail: "burj.khalifak@mail.com",
  keeperPassword: "burjkhalifa",
  keeperPhone: "089999999999",
  spaceLeft: 100,
  spaceFilled: 0,
  facilities: ["Tenda", "Bunga", "Air"],
};

const caseFail1 = { ...caseSuccess, cemetaryName: "" };
const caseFail2 = { ...caseSuccess, cemetaryLocation: "" };
const caseFail3 = { ...caseSuccess, width: 0 };
const caseFail4 = { ...caseSuccess, width: -1 };
const caseFail5 = { ...caseSuccess, height: 0 };
const caseFail6 = { ...caseSuccess, height: -1 };
const caseFail7 = { ...caseSuccess, latitude: "" };
const caseFail8 = { ...caseSuccess, longitude: "" };
const caseFail9 = { ...caseSuccess, image_url: [] };
const caseFail10 = { ...caseSuccess, image_url: [""] };
const caseFail11 = { ...caseSuccess, price: 0 };
const caseFail12 = { ...caseSuccess, price: -1 };
const caseFail13 = { ...caseSuccess, keeperName: "" };
const caseFail14 = { ...caseSuccess, keeperEmail: "" };
const caseFail15 = { ...caseSuccess, keeperPassword: "" };
const caseFail16 = { ...caseSuccess, keeperPhone: "" };
const caseFail17 = { ...caseSuccess, spaceLeft: -1 };
const caseFail18 = { ...caseSuccess, spaceFilled: -1 };
const caseFail19 = { ...caseSuccess, facilities: [] };
const caseFail20 = { ...caseSuccess, facilities: [""] };

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

describe("PUT Update cemetery data by ID | Success case", () => {
  test(`Update particular cemetery data`, (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseSuccess)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("message", "Data updated");
        done();
      });
  });
});

describe("PUT Update cemetery data by ID | Failed case", () => {
  test("Error 400: Jika nama makam tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail1)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Nama makam wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika lokasi makam tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail2)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Lokasi makam wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika width tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail3)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Width tidak boleh kosong atau minus!"
        );
        done();
      });
  });

  test("Error 400: Jika width bernilai minus", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail4)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Width tidak boleh kosong atau minus!"
        );
        done();
      });
  });

  test("Error 400: Jika height tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail5)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Height tidak boleh kosong atau minus!"
        );
        done();
      });
  });

  test("Error 400: Jika height bernilai minus", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail6)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Height tidak boleh kosong atau minus!"
        );
        done();
      });
  });

  test("Error 400: Jika koordinat latitude makam tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail7)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Latitude wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika koordinat longitude makam tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail8)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Longitude wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika image url makam tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail9)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Image URL wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika image url makam dikosongkan", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail10)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Image URL wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika harga tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail11)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Harga tidak boleh kosong atau minus!"
        );
        done();
      });
  });

  test("Error 400: Jika harga bernilai minus", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail12)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Harga tidak boleh kosong atau minus!"
        );
        done();
      });
  });

  test("Error 400: Jika nama penjaga tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail13)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Nama penjaga wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika email penjaga tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail14)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Email penjaga wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika password penjaga tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail15)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Password penjaga wajib diisi!"
        );
        done();
      });
  });

  test("Error 400: Jika kontak penjaga tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail16)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Kontak penjaga wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika jumlah sisa lahan bernilai minus", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail17)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Jumlah sisa lahan tidak boleh minus!"
        );
        done();
      });
  });

  test("Error 400: Jika jumlah lahan terisi bernilai minus", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail18)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty(
          "pesan",
          "Jumlah lahan terisi tidak boleh minus!"
        );
        done();
      });
  });

  test("Error 400: Jika fasilitas makam tidak diisi", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail19)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Fasilitas wajib diisi!");
        done();
      });
  });

  test("Error 400: Jika fasilitas makam dikosongkan", (done) => {
    request(app)
      .put("/keeper/" + sampleId)
      .send(caseFail20)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("pesan", "Fasilitas wajib diisi!");
        done();
      });
  });
});
