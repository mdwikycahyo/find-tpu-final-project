const request = require("supertest");
const { encode } = require("../helpers/bcrypt");
const { connect } = require("../config/mongodb");
const app = require("../app");

let client;
let db;

let caseSuccess = {
  cemetaryName: "TPU Cisalah",
  cemetaryLocation: "Ciliwung Raya",
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

let urlEndpoint = "/keeper/";

beforeAll(async () => {
  let newConnection = await connect();
  client = newConnection.client;
  db = newConnection.db;

  db.collection("testkeeper");
});

afterAll((done) => {
  client.close();
  done();
});

describe("POST Create Keeper | Success case", () => {
  test("Return New Keeper data", (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseSuccess)
      .then((res) => {
        expect(res.status).toBe(201);
        expect(res.body).toEqual(expect.any(Object));
        done();
      });
  }, 10000);
});
