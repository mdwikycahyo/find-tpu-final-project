const Admin = require("../models/adminModel");
const { encode, decode } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");

const myRole = "admin";

//BELUM VALIDASI
class AdminController {
  static async registerAdmin(req, res, next) {
    const { email, password } = req.body;
    try {
      if (!email)
        throw {
          status: 400,
          pesan: "Email / password tidak boleh kosong!",
        };
      if (!password)
        throw {
          status: 400,
          pesan: "Email / password tidak boleh kosong!",
        };
      const payload = {
        email,
        password: encode(password),
        role: myRole,
      };
      //   adminData.password = await encode(adminData.password);
      const addedData = await Admin.createAdmin(payload);
      res.status(201).json(addedData.ops[0]);
    } catch (err) {
      //   console.log(err);
      next(err);
    }
  }

  static async loginAdmin(req, res, next) {
    let { email, password } = req.body;
    // const email = req.body.email;
    // const password = req.body.password;
    try {
      let adminData = await Admin.loginAdmin(email);
      if (!adminData)
        throw {
          status: 400,
          pesan: "Email / password yang Anda masukkan salah!",
        };
      adminData = decode(password, adminData.password);
      if (!adminData)
        throw {
          status: 400,
          pesan: "Email / password yang Anda masukkan salah!",
        };
      const payload = {
        _id: adminData._id,
        email: adminData.email,
        role: adminData.role,
      };
      const access_token = sign(payload);
      res.status(200).json({ access_token });
      //   if (adminData === null) {
      //     console.log("Not Found");
      //   } else if (decode(password, adminData.password)) {
      //     console.log("Wrong password");
      //   } else {
      //     let payload = {
      //       _id: adminData._id,
      //       email: adminData.email,
      //       role: adminData.role,
      //     };
      //     let access_token = sign(payload);
      //     res.status(200).json({ access_token });
      //   }
    } catch (err) {
      //   console.log(err);
      next(err);
    }
  }
}

module.exports = AdminController;
