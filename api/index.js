const express = require("express");
const router = express.Router();
//jobs
const jobsRouter = require("./job.api.js");
router.use("/jobs", jobsRouter);
//Companies
const companiesRouter = require("./companies.api.js");
router.use("/companies", companiesRouter);

module.exports = router;
