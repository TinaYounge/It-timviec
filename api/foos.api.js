const express = require("express");
const router = express.Router();

///CRUD Foo
// router.post("/", (req, res) => {});
router.get("/", (_, res) => {
  console.log("Foo");
  res.send(["spam", "ham"]);
});
module.exports = router;
