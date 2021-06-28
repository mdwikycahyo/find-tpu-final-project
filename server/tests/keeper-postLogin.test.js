const request = require("supertest");
const { connect } = require("../config/mongodb");
const app = require("../app");

let client;
let db;

let caseSuccess = {
  email: "tony.stork@gmail.com",
  password: "tonystork",
};

let urlEndpoint = "/keeper/login";

beforeAll(async () => {
  let newConnection = await connect();
  client = newConnection.client;
  db = newConnection.db;
  db.collection("test-keeper");
});

afterAll((done) => {
  client.close();
  done();
});

describe("POST Login Keeper | Success case", () => {
  test(`Return access_token`, (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseSuccess)
      .then((res) => {
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty(`access_token`, expect.any(String));
        done();
      });
  }, 10000);
});
