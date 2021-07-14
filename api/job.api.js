const express = require("express");
const router = express.Router();
const { jobs } = require("../data/data.json");
//create

const addablejobParams = ["firstName", "lastName"];
router.post("/", (req, res) => {
  try {
    const job = {};
    for (const param of addablejobParams) {
      if (req.body[param]) job[param] = req.body[param];
    }
    job.fullName = req.body.firstName + " " + req.body.lastName;
    jobs.push(job);
    res.status(201).send(jobs);
  } catch (error) {
    res.status(404).send("something is not good");
  }
});
///CRUD job
// router.post("/", (req, res) => {});
const filterableJobParams = ["city", "name"];

router.get("/", (_, res) => {
  // res.send(jobs);
  res.status(200).send(jobs.slice(0, 19));
});
//UDate
router.patch("/:id", (req, res) => {
  try {
    const idx = jobs.findIndex((f) => f.id === parseInt(req.params.id));
    const job = jobs[idx];
    console.log(idx);
    for (const param of addablejobParams) {
      if (req.body[param]) job[param] = req.body[param];
    }
    job.fullName = req.body.firstName + " " + req.body.lastName;
    res.send(job);
  } catch (error) {
    res.status(404).send("something is not good");
  }
});
//Delete

router.delete("/", (_, res) => {
  try {
    console.log("job");
    res.send(jobs);
  } catch (error) {
    res.status(404).send("something is not good");
  }
});
module.exports = router;
