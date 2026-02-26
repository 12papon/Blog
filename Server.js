const express = require("express");
const Database = require("./src/configDB/configDB");

const app = express();
Database();

app.get((req, res) => {
  res.send("Hallo");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listen to port ${process.env.PORT}`);
});
