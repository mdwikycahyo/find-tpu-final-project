const request = require("supertest");
const { connect } = require("../config/mongodb");
const app = require("../app");

let client;
let db;

const sampleId = "60d97b7b04e4330916e5afb6";

let urlEndpoint = "/keeper/" + sampleId;

beforeAll(async () => {
  let newConnection = await connect();
  client = newConnection.client;
  db = newConnection.db;
});

afterAll((done) => {
  client.close();
  done();
});

describe("DELETE Cemetery data by ID | Success case", () => {
  test(`Delete particular cemetery data`, (done) => {
    request(app)
      .delete(urlEndpoint)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toEqual(expect.any(Object));
        expect(res.body).toHaveProperty("message", "Keeper has been deleted");
        done();
      });
  }, 10000);
});
