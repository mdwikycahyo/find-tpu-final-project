const request = require("supertest");
const { encode } = require("../helpers/bcrypt");
const app = require("../app");
const AdminModel = require("../models/adminModel");

jest.mock("../models/adminModel");

let id = 1;
const keyword = "user-admin-";
const urlEndpoint = "/admin/login";

const caseSuccess = {
  email: "admin@mail.com",
  password: "rahasia",
};

const caseFail1 = { ...caseSuccess, email: "" };
const caseFail2 = { ...caseSuccess, password: "" };
const caseFail3 = { ...caseSuccess, email: "impostor@mail.com" };
const caseFail4 = { ...caseSuccess, password: "password123" };
const caseFail5 = {
  email: "hanun@mail.com",
  password: "password123",
};

beforeAll(async () => {
  const user1 = await AdminModel.createAdmin({
    _id: keyword + String(id++),
    email: "admin@mail.com",
    password: encode("rahasia"),
    role: "admin",
  });
  const user2 = await AdminModel.createAdmin({
    _id: keyword + String(id++),
    email: "hanun@mail.com",
    password: encode("password123"),
    role: "stranger",
  });
});

afterAll((done) => {
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
  });
});

describe(`POST Login Admin | Failed case`, () => {
  test(`Error 400: Jika email tidak diisi`, (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail1)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty(`pesan`, `Email tidak boleh kosong!`);
        done();
      });
  });

  test(`Error 400: Jika password tidak diisi`, (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail2)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty(
          `pesan`,
          `Password tidak boleh kosong!`
        );
        done();
      });
  });

  test(`Error 400: Jika email tidak ditemukan di database`, (done) => {
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

  test(`Error 400: Jika email ada tapi password salah`, (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail4)
      .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty(
          `pesan`,
          `Email / password yang Anda masukkan salah!`
        );
        done();
      });
  });

  test(`Error 401: Jika role bukan admin`, (done) => {
    request(app)
      .post(urlEndpoint)
      .send(caseFail5)
      .then((res) => {
        expect(res.status).toBe(401);
        expect(res.body).toHaveProperty(
          `pesan`,
          `Maaf Anda tidak memiliki akses!`
        );
        done();
      });
  });
});
