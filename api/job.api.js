const express = require("express");
const router = express.Router();
const { jobs } = require("../data/data.json");
//create

// const addablejobParams = ["title", "city"];
router.post("/", (req, res) => {
  try {
    const j = req.body;
    jobs.unshift(j);
    res.json(jobs);
    // const job = {};
    // for (const param of addablejobParams) {
    //   if (req.body[param]) job[param] = req.body[param];
    // }
    // job.fullName = req.body.firstName + " " + req.body.lastName;
    // jobs.push(job);
    // res.status(201).send(jobs);
  } catch (error) {
    res.status(404).send("something is not good");
  }
});
///CRUD job
// router.post("/", (req, res) => {});
const filterableJobParams = ["city", "name"];

router.get("/", (req, res) => {
  try {
    const { id, companyId } = req.query;
    if (id) {
      const idxJob = jobs.findIndex((el) => el.id === id);
      console.log("idxJob", idxJob);
      const result = jobs[idxJob];
      res.status(200).send(result);
    } else if (companyId) {
      const companyId = req.query.companyId;
      console.log("company", companyId);
      const listJobInCom = [];
      for (const j of jobs) {
        if (companyId == j.companyId) {
          listJobInCom.push(j);
        }
      }
      res.status(200).send(listJobInCom);
    } else {
      res.status(202).send(jobs.slice(0, 20));
    }
  } catch (error) {
    res.status(404).send("something is not good");
  }
});
//UDate
// router.patch("/:id", (req, res) => {
//   try {
//     const idx = jobs.findIndex((f) => f.id === parseInt(req.params.id));
//     const job = jobs[idx];
//     console.log(idx);
//     for (const param of addablejobParams) {
//       if (req.body[param]) job[param] = req.body[param];
//     }
//     job.fullName = req.body.firstName + " " + req.body.lastName;
//     res.send(job);
//   } catch (error) {
//     res.status(404).send("something is not good");
//   }
// });
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
