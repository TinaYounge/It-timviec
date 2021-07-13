const express = require("express");
const router = express.Router();
const { foos } = require("../data/foos.json");
//create
const addableFooParams = ["firstName", "lastName"];
router.post("/", (req, res) => {
  const foo = {};
  for (const param of addableFooParams) {
    if (req.body[param]) foo[param] = req.body[param];
  }
  foo.fullName = req.body.firstName + " " + req.body.lastName;
  foos.push(foo);
  res.send(foo);
});
///CRUD Foo
// router.post("/", (req, res) => {});
router.get("/", (_, res) => {
  console.log("Foo");
  res.send(foos);
});
//UDate
router.patch("/:id", (req, res) => {
  const idx = foos.findIndex((f) => f.id === parseInt(req.params.id));
  const foo = foos[idx];
  console.log(idx);
  for (const param of addableFooParams) {
    if (req.body[param]) foo[param] = req.body[param];
  }
  foo.fullName = req.body.firstName + " " + req.body.lastName;
  res.send(foos);
});
//Delete

router.get("/", (_, res) => {
  console.log("Foo");
  res.send(foos);
});
module.exports = router;
