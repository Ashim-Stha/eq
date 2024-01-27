const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.use("/", require("./router"));

let scamData = false;

app.post("/scam", (req, res) => {
  const scam = req.body;
  scamData = scam;
  res.send("success");
});

app.get("/scam", (req, res) => {
  res.send(scamData);
  scamData = false;
});

app.listen(5000, () => {
  console.log("Server running");
});
