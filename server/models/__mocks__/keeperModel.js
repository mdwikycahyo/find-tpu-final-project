const keeperMap = new Map();
const spaceMap = new Map();
const keeperLoginMap = new Map();
const spaceMaker = require("../../helpers/cemetaryMaker");

class Keeper {
  static createKeeper(payload) {
    let idSpace = 1;
    const keywordSpace = "cemetery-space-";

    let idKeeper = 1;
    const keywordKeeper = "cemetery-keeper-";

    const cemetery = spaceMaker(payload.height, payload.width);
    cemetery._id = keywordSpace + String(idSpace++);

    spaceMap.set(cemetery._id, cemetery);

    payload.cemetarySpaceId = cemetery._id;
    payload._id = keywordKeeper + String(idKeeper++);

    keeperMap.set(payload._id, payload);
    keeperLoginMap.set(payload.keeperEmail, payload);

    const newPayload = {
      ops: [payload],
    };
    return newPayload;
  }

  static loginKeeper(email) {
    const data = keeperLoginMap.get(email);
    return data;
  }

  static getAllData() {
    const data = Array.from(...keeperMap);
    return data;
  }

  static getById(_id) {
    const data = { ...keeperMap.get(_id) };
    if (!Object.keys(data).length) return data;
    const data2 = { ...spaceMap.get(data.cemetarySpaceId) };
    data.cemetarySpace = data2;
    return data;
  }

  static updateKeeperData(_id, payload) {
    const data = keeperMap.get(_id);
    keeperMap.set(_id, payload);
    const newData = keeperMap.get(_id);
    return newData;
  }

  static updateCemetarySpace(_id, payload) {
    const cemetarySpaceId = payload.cemetarySpaceId;
    const row = payload.position[0];
    const column = payload.position[1];
    let cemetaryData = [keeperMap.get(_id)];
    let spaceData = [spaceMap.get(cemetarySpaceId)];
    cemetaryData[0].spaceLeft--;
    cemetaryData[0].spaceFilled++;
    spaceData[0][row - 1][column - 1] = "x";
    const newCemetaryData = keeperMap.set(cemetaryData[0]._id, cemetaryData[0]);
    const newSpaceData = spaceMap.set(spaceData[0]);
    newCemetaryData.cemetarySpace = newSpaceData;
    return newCemetaryData;
  }

  static deleteKeeper(_id) {
    return keeperMap.delete(_id);
  }
}

module.exports = Keeper;
