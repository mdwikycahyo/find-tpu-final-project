const request = require("supertest");
const { connect } = require("../config/mongodb");
const app = require("../app");

let client;
let db;

const sampleId = "60d96e9c95ebbb8088dae478";
const sampleSpaceId = "60d96e9c95ebbb8088dae477";

let urlEndpoint = "/keeper/" + sampleId;

let caseSuccess = {
  cemetarySpaceId: sampleSpaceId,
  position: [5, 5],
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

describe("PATCH Cemetery data by ID | Success case", () => {
  test(`Update particular cemetery space data`, (done) => {
    request(app)
      .patch(urlEndpoint)
      .send(caseSuccess)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("message", "Cemetary spaced filled");
        done();
      });
  }, 10000);
});
