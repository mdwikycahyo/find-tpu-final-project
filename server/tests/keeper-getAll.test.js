const request = require("supertest");
const app = require("../app");
const { encode } = require("../helpers/bcrypt");
const KeeperModel = require("../models/keeperModel");

jest.mock("../models/keeperModel");

const urlEndpoint = "/keeper/";

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

describe("GET Cemetery data | Success case", () => {
  test(`Show all cemeteries`, (done) => {
    request(app)
      .get(urlEndpoint)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              _id: expect.any(String),
              cemetaryName: expect.any(String),
              cemetaryLocation: expect.any(String),
              width: expect.any(Number),
              height: expect.any(Number),
              latitude: expect.any(String),
              longitude: expect.any(String),
              image_url: expect.arrayContaining([expect.any(String)]),
              price: expect.any(Number),
              keeperName: expect.any(String),
              keeperPassword: expect.any(String),
              keeperPhone: expect.any(String),
              spaceLeft: expect.any(Number),
              spaceFilled: expect.any(Number),
              facilities: expect.arrayContaining([expect.any(String)]),
            }),
          ])
        );
        done();
      });
  });
});
