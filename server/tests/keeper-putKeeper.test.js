const request = require("supertest");
const { connect } = require("../config/mongodb");
const app = require("../app");

let client;
let db;

const sampleId = "60d96e9c95ebbb8088dae478";

let urlEndpoint = "/keeper/" + sampleId;

let caseSuccess = {
  cemetaryName: "TPU Cisauk",
  cemetaryLocation: "Cisauk Wonderland",
  width: 15,
  height: 15,
  cemetaryType: "",
  latitude: "-6.4286981999999995",
  longitude: "106.8265268",
  image_url: [
    "https://cdn-2.tstatic.net/surabaya/foto/bank/images/fakta-di-balik-video-kuburan-keluarkan-api-misterius-viral-di-instagram.jpg",
  ],
  price: 800000,
  keeperName: "Tony Stork",
  keeperEmail: "tony.stork@gmail.com",
  keeperPassword: "tonystork",
  keeperPhone: "089999999999",
  spaceLeft: 225,
  spaceFilled: 0,
  facilities: ["Tenda", "Bunga", "Air"],
};

beforeAll(async () => {
  let newConnection = await connect();
  client = newConnection.client;
  db = newConnection.db;
});

afterAll((done) => {
  client.close();
  done();
});

describe("PUT Cemetery data by ID | Success case", () => {
  test(`Update particular cemetery data`, (done) => {
    request(app)
      .put(urlEndpoint)
      .send(caseSuccess)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("message", "Data updated");
        done();
      });
  }, 10000);
});
