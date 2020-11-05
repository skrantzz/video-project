const express = require("express");
const app = express();
const port = 3000;

// const webpack = require("webpack");
// const webpackDevMiddleware = require("webpack-dev-middleware");
// const config = require("./webpack.config.js");
// const compiler = webpack(config);

// app.use(
//     webpackDevMiddleware(compiler, {
//       publicPath: config.output.publicPath,
//     })
//   );

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.put("/user", function (req, res) {
  res.send("Got a PUT request at /user");
});

app.post("/user", function (req, res) {
  res.send("Got a POST request at /user");
});

app.delete("/user", function (req, res) {
  res.send("Got a DELETE request at /user");
});
