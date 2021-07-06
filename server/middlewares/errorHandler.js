function errorHandler(err, req, res, next) {
  if (err.status == 400) {
    return res.status(400).json({ pesan: err.pesan || "Bad Request" });
  } else {
    return res
      .status(err.status || 500)
      .json({ pesan: err.pesan || "Internal Server Error" });
  }
}

module.exports = errorHandler;
