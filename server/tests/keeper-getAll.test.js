const request = require("supertest");
const { connect } = require("../config/mongodb");
const app = require("../app");

let client;
let db;

let urlEndpoint = "/keeper/";

beforeAll(async () => {
  let newConnection = await connect();
  client = newConnection.client;
  db = newConnection.db;
});

afterAll((done) => {
  client.close();
  done();
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
  }, 10000);
});
