const http = require("http");
const app = require("../app");
const port = process.env.PORT || 3000;
const { connect } = require("../config/mongodb");

connect().then(() => {
  console.log("MONGO CONNECTED");
  http.createServer(app).listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
