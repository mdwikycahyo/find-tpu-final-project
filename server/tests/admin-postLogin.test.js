const request = require("supertest");
const { encode } = require("../helpers/bcrypt");
const { connect } = require("../config/mongodb");
const app = require("../app");

let client;
let db;

let urlEndpoint = "/admin/login";

let caseSuccess = {
  email: "admin@gmail.com",
  password: "adminadmin",
};

let caseFail1 = { ...caseSuccess, email: "", password: "" };
let caseFail2 = { ...caseSuccess, password: "password123" };
let caseFail3 = { ...caseSuccess, email: "impostor@mail.com" };

beforeAll(async () => {
  let newConnection = await connect();
  db = newConnection.db;
  client = newConnection.client;

  function userAdmin() {
    return db.collection("testAdmin");
  }

  userAdmin().insertOne({
    email: "admin@gmail.com",
    password: encode("adminadmin"),
    role: "admin",
  });
});

afterAll((done) => {
  client.close();
  done();
});

describe(`POST Login Admin | Success case`, () => {
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

describe(`POST Login Admin | Failed case`, () => {
  test(`Error 400: Jika email dan password kosong`, (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail1)
      .then((res) => {
        // if (error) return done(error);
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty(
          `pesan`,
          `Email / password yang Anda masukkan salah!`
        );
        done();
      }, 10000);
  });

  test(`Error 400: Jika email ada, tapi password salah`, (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail2)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty(
          `pesan`,
          `Email / password yang Anda masukkan salah!`
        );
        done();
      }, 10000);
  });

  test(`Error 400: Jika email tidak ada di Database`, (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail3)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty(
          `pesan`,
          `Email / password yang Anda masukkan salah!`
        );
        done();
      });
  });
});
