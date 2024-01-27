const express = require("express");
const router = express.Router();
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("earthquake.db");

db.run(`CREATE TABLE IF NOT EXISTS earthquake(
    x REAL NOT NULL,
    y REAL NOT NULL,
    z REAL NOT NULL
);`);

router.post("/", (req, res) => {
  const { x, y, z } = req.body;

  const query = "INSERT INTO earthquake(x, y, z) VALUES (?, ?, ?);";

  db.run(query, [x, y, z], function (err) {
    if (err) {
      console.log(err);
      return res.status(500).send("Error inserting data into the database");
    }

    console.log(`Row inserted with ID: ${this.lastID}`);
    res.status(200).send("Data inserted successfully");
  });
});

router.get("/", (req, res) => {
  db.all("SELECT x, y, z FROM earthquake", (err, rows) => {
    if (err) {
      console.error(err.message);
      return res.status(500).send("Error fetching data from the database");
    }

    res.json(rows);
  });
});

module.exports = router;
