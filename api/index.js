const express = require("express");
const router = express.Router();

const foosRouter = require("./foos.api.js");
router.use("/foos", foosRouter);
// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
// router.get("/foos", function (req, res, next) {
//   res.send("Ham");
// });

module.exports = router;
