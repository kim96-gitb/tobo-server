const express = require("express");
const dotenv = require("dotenv");
const { json } = require("express");
dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(json());

const PORT = process.env.PORT;

app.listen(PORT, console.log("서버개발 시작", PORT));
