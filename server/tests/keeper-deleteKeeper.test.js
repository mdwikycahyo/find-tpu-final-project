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

describe("DELETE Cemetery data by ID | Success case", () => {
  test(`Delete particular cemetery data`, (done) => {
    request(app)
      .delete("/keeper/" + sampleId)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("message", "Keeper has been deleted");
        done();
      });
  });
});
