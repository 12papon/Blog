const express = require("express");
const Database = require("./src/configDB/configDB");
const router = require("./src/route/router");

const app = express();
// Database
Database();

//Routers
app.use("/api/v1", router);

//Error Handaling
app.use((err, req, res, next) => {
  if (err) {
    res.send("internal server error" + err);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server listen to port ${process.env.PORT}`);
});
