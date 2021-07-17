const express = require("express");
const router = express.Router();
// const { jobs } = require("../data/data.json");
const { jobs } = require("../tools/out.json");

//create

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
    const { id, companyId, page } = req.query;
    console.log("req.query", req.query);
    if ((companyId, page)) {
      const companyId = req.query.companyId;
      console.log("company", companyId);
      const listJobInCom = [];
      for (const j of jobs) {
        if (companyId == j.companyId) {
          listJobInCom.push(j);
        }
      }
      const nth = parseInt(req.query.page);
      const a = (nth - 1) * 20;
      const b = nth * 20 - 1;
      res.status(201).send(listJobInCom.slice(a, b));
      // res.status(202).send("good");
    } else if (id) {
      const idxJob = jobs.findIndex((el) => el.id === id);
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
