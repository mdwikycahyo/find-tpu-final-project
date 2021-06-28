const Keeper = require("../models/keeperModel");
const { decode, encode } = require("../helpers/bcrypt");
const { sign } = require("../helpers/jwt");

class KeeperController {
  static async loginKeeper(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;
    try {
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
        role: "keeper",
      };
      //   if (decode(password, keeperData.keeperPassword)) {
      //     const payload = {
      //       email: keeperData.keeperEmail,
      //       id: keeperData.id,
      //       role: "keeper",
      //     };
      const access_token = sign(payload);
      res.status(200).json({ access_token });
      //   }
    } catch (err) {
      //   console.log(err);
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
      keeperData.keeperPassword = await encode(keeperData.keeperPassword);
      const addedData = await Keeper.createKeeper(keeperData);
      res.status(201).json(addedData.ops[0]);
    } catch (err) {
      console.log(err);
    }
  }
  static async getAllData(req, res, next) {
    try {
      const allKeeperData = await Keeper.getAllData();
      res.status(200).json(allKeeperData);
    } catch (err) {
      console.log(err);
    }
  }
  static async getById(req, res, next) {
    const id = req.params.id;
    try {
      const keeperData = await Keeper.getById(id);
      res.status(200).json(keeperData);
    } catch (err) {
      console.log(err);
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
      keeperData.keeperPassword = await encode(keeperData.keeperPassword);
      const updatedData = await Keeper.updateKeeperData(id, keeperData);
      res.status(200).json({ message: "Data updated" });
    } catch (err) {
      console.log(err);
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
      console.log(err);
    }
  }
  static async deleteKeeper(req, res, next) {
    const id = req.params.id;
    await Keeper.deleteKeeper(id);
    res.status(200).json({ message: "Keeper has been deleted" });
  }
}

module.exports = KeeperController;
