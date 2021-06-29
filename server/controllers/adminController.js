const Admin = require("../models/adminModel");
const { decode } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");

//BELUM VALIDASI
class AdminController {
  static async loginAdmin(req, res, next) {
    let { email, password } = req.body;
    try {
      if (!email) throw { status: 400, pesan: "Email tidak boleh kosong!" };
      if (!password)
        throw { status: 400, pesan: "Password tidak boleh kosong!" };

      const adminData = await Admin.loginAdmin(email);

      if (!adminData)
        throw {
          status: 400,
          pesan: "Email / password yang Anda masukkan salah!",
        };

      let passwordMatch = decode(password, adminData.password);

      if (!passwordMatch)
        throw {
          status: 400,
          pesan: "Email / password yang Anda masukkan salah!",
        };
      if (adminData.role !== "admin")
        throw { status: 401, pesan: "Maaf Anda tidak memiliki akses!" };

      const payload = {
        _id: adminData._id,
        email: adminData.email,
        role: adminData.role,
      };

      const access_token = sign(payload);
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = AdminController;
