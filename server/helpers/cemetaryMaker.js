module.exports = (cemetaryRow, cemetaryColumn) => {
  let cemetary = {};
  for (let i = 0; i < cemetaryRow; i++) {
    let row = [];
    for (let j = 0; j < cemetaryColumn; j++) {
      row.push(" ");
    }
    cemetary[i] = row;
  }
  return cemetary;
};
