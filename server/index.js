const { PORT, TEMPLATES } = require("./configs");
const { banner } = require("./utils/banner");
const private = require("./rotas/private");
const public = require("./rotas/public");
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(TEMPLATES));
app.use(express.json());

app.use("/", private);

app.listen(PORT, () => {
  banner("X SERVER");
});
