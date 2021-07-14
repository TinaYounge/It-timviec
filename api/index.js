const express = require("express");
const router = express.Router();
//foos
const foosRouter = require("./foos.api.js");
router.use("/jobs", foosRouter);
//Jobs
// const jobsRouter = require("./jobs.api.js");
// router.use("/jobs", jobsRouter);
//Companies
const companiesRouter = require("./companies.api.js");
router.use("/companies", companiesRouter);

module.exports = router;
