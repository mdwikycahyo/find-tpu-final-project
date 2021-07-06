const Keeper = require("../models/keeperModel");
const { decode, encode } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");

class KeeperController {
  static async loginKeeper(req, res, next) {
    const { email, password } = req.body;
    const myRole = "keeper";
    try {
      if (!email) throw { status: 400, pesan: "Email tidak boleh kosong!" };
      if (!password)
        throw { status: 400, pesan: "Password tidak boleh kosong!" };
      const keeperData = await Keeper.loginKeeper(email);

      if (!keeperData)
        throw {
          status: 400,
          pesan: "Email / password yang Anda masukkan salah!",
        };
      let passwordMatch = decode(password, keeperData.keeperPassword);
      if (!passwordMatch)
        throw {
          status: 400,
          pesan: "Email / password yang Anda masukkan salah!",
        };
      const payload = {
        _id: keeperData._id,
        email: keeperData.keeperEmail,
        role: myRole,
      };
      const access_token = sign(payload);
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }

  static async createKeeper(req, res, next) {
    let keeperData = {
      cemetaryName: req.body.cemetaryName,
      cemetaryLocation: req.body.cemetaryLocation,
      width: req.body.width,
      height: req.body.height,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      image_url: req.body.image_url,
      price: req.body.price,
      keeperName: req.body.keeperName,
      keeperEmail: req.body.keeperEmail,
      keeperPassword: req.body.keeperPassword,
      keeperPhone: req.body.keeperPhone,
      spaceLeft: req.body.spaceLeft,
      spaceFilled: req.body.spaceFilled,
      facilities: req.body.facilities,
    };
    try {
      if (!keeperData.cemetaryName)
        throw { status: 400, pesan: "Nama makam wajib diisi!" };
      if (!keeperData.cemetaryLocation)
        throw { status: 400, pesan: "Lokasi makam wajib diisi!" };
      if (!keeperData.width)
        throw {
          status: 400,
          pesan: "Width tidak boleh kosong atau minus!",
        };
      if (keeperData.width < 0)
        throw {
          status: 400,
          pesan: "Width tidak boleh kosong atau minus!",
        };
      if (!keeperData.height)
        throw {
          status: 400,
          pesan: "Height tidak boleh kosong atau minus!",
        };
      if (keeperData.height < 0)
        throw {
          status: 400,
          pesan: "Height tidak boleh kosong atau minus!",
        };
      if (!keeperData.latitude)
        throw { status: 400, pesan: "Latitude wajib diisi!" };
      if (!keeperData.longitude)
        throw { status: 400, pesan: "Longitude wajib diisi!" };
      if (!keeperData.image_url.length)
        throw { status: 400, pesan: "Image URL wajib diisi!" };
      keeperData.image_url.map((image) => {
        if (!image) throw { status: 400, pesan: "Image URL wajib diisi!" };
      });
      if (!keeperData.price)
        throw {
          status: 400,
          pesan: "Harga tidak boleh kosong atau minus!",
        };
      if (keeperData.price < 0)
        throw {
          status: 400,
          pesan: "Harga tidak boleh kosong atau minus!",
        };
      if (!keeperData.keeperName)
        throw { status: 400, pesan: "Nama penjaga wajib diisi!" };
      if (!keeperData.keeperEmail)
        throw { status: 400, pesan: "Email penjaga wajib diisi!" };
      if (!keeperData.keeperPassword)
        throw { status: 400, pesan: "Password penjaga wajib diisi!" };
      if (!keeperData.keeperPhone)
        throw { status: 400, pesan: "Kontak penjaga wajib diisi!" };
      if (keeperData.spaceLeft < 0)
        throw { status: 400, pesan: "Jumlah sisa lahan tidak boleh minus!" };
      if (keeperData.spaceFilled < 0)
        throw { status: 400, pesan: "Jumlah lahan terisi tidak boleh minus!" };
      if (!keeperData.facilities.length)
        throw { status: 400, pesan: "Fasilitas wajib diisi!" };
      keeperData.facilities.map((facility) => {
        if (!facility) throw { status: 400, pesan: "Fasilitas wajib diisi!" };
      });

      keeperData.keeperPassword = await encode(keeperData.keeperPassword);
      const addedData = await Keeper.createKeeper(keeperData);
      res.status(201).json(addedData.ops[0]);
    } catch (err) {
      next(err);
    }
  }
  static async getAllData(req, res, next) {
    try {
      const allKeeperData = await Keeper.getAllData();
      if (!allKeeperData) throw { status: 404, pesan: "Data tidak ditemukan!" };
      res.status(200).json(allKeeperData);
    } catch (err) {
      next(err);
    }
  }
  static async getById(req, res, next) {
    const id = req.params.id;
    try {
      const keeperData = await Keeper.getById(id);
      if (!Object.keys(keeperData).length) {
        throw { status: 404, pesan: "Data tidak ditemukan!" };
      }
      res.status(200).json(keeperData);
    } catch (err) {
      next(err);
    }
  }
  static async updateKeeperData(req, res, next) {
    const id = req.params.id;
    let keeperData = {
      cemetaryName: req.body.cemetaryName,
      cemetaryLocation: req.body.cemetaryLocation,
      width: req.body.width,
      height: req.body.height,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      image_url: req.body.image_url,
      price: req.body.price,
      keeperName: req.body.keeperName,
      keeperEmail: req.body.keeperEmail,
      keeperPassword: req.body.keeperPassword,
      keeperPhone: req.body.keeperPhone,
      spaceLeft: req.body.spaceLeft,
      spaceFilled: req.body.spaceFilled,
      facilities: req.body.facilities,
    };
    try {
      if (!keeperData.cemetaryName)
        throw { status: 400, pesan: "Nama makam wajib diisi!" };
      if (!keeperData.cemetaryLocation)
        throw { status: 400, pesan: "Lokasi makam wajib diisi!" };
      if (!keeperData.width)
        throw {
          status: 400,
          pesan: "Width tidak boleh kosong atau minus!",
        };
      if (keeperData.width < 0)
        throw {
          status: 400,
          pesan: "Width tidak boleh kosong atau minus!",
        };
      if (!keeperData.height)
        throw {
          status: 400,
          pesan: "Height tidak boleh kosong atau minus!",
        };
      if (keeperData.height < 0)
        throw {
          status: 400,
          pesan: "Height tidak boleh kosong atau minus!",
        };
      if (!keeperData.latitude)
        throw { status: 400, pesan: "Latitude wajib diisi!" };
      if (!keeperData.longitude)
        throw { status: 400, pesan: "Longitude wajib diisi!" };
      if (!keeperData.image_url.length)
        throw { status: 400, pesan: "Image URL wajib diisi!" };
      keeperData.image_url.map((image) => {
        if (!image) throw { status: 400, pesan: "Image URL wajib diisi!" };
      });
      if (!keeperData.price)
        throw {
          status: 400,
          pesan: "Harga tidak boleh kosong atau minus!",
        };
      if (keeperData.price < 0)
        throw {
          status: 400,
          pesan: "Harga tidak boleh kosong atau minus!",
        };
      if (!keeperData.keeperName)
        throw { status: 400, pesan: "Nama penjaga wajib diisi!" };
      if (!keeperData.keeperEmail)
        throw { status: 400, pesan: "Email penjaga wajib diisi!" };
      if (!keeperData.keeperPassword)
        throw { status: 400, pesan: "Password penjaga wajib diisi!" };
      if (!keeperData.keeperPhone)
        throw { status: 400, pesan: "Kontak penjaga wajib diisi!" };
      if (keeperData.spaceLeft < 0)
        throw { status: 400, pesan: "Jumlah sisa lahan tidak boleh minus!" };
      if (keeperData.spaceFilled < 0)
        throw { status: 400, pesan: "Jumlah lahan terisi tidak boleh minus!" };
      if (!keeperData.facilities.length)
        throw { status: 400, pesan: "Fasilitas wajib diisi!" };
      keeperData.facilities.map((facility) => {
        if (!facility) throw { status: 400, pesan: "Fasilitas wajib diisi!" };
      });
      keeperData.keeperPassword = await encode(keeperData.keeperPassword);
      const updatedData = await Keeper.updateKeeperData(id, keeperData);
      res.status(200).json({ message: "Data updated" });
    } catch (err) {
      next(err);
    }
  }
  static async updateCemetarySpace(req, res, next) {
    const id = req.params.id;
    const cemetaryPayload = {
      cemetarySpaceId: req.body.cemetarySpaceId,
      position: req.body.position,
    };
    try {
      const updateCemetarySpace = await Keeper.updateCemetarySpace(
        id,
        cemetaryPayload
      );
      res.status(200).json({ message: "Cemetary spaced filled" });
    } catch (err) {
      next(err);
    }
  }
  static async deleteKeeper(req, res, next) {
    const id = req.params.id;
    try {
      await Keeper.deleteKeeper(id);
      res.status(200).json({ message: "Keeper has been deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = KeeperController;
