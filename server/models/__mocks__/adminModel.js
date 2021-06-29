const adminMap = new Map();

class Admin {
  static createAdmin(payload) {
    adminMap.set(payload.email, payload);
    return payload;
  }

  static loginAdmin(email) {
    const data = adminMap.get(email);
    return data;
  }
}

module.exports = Admin;
