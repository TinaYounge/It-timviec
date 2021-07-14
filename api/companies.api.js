const express = require("express");
const router = express.Router();
const { companies } = require("../data/data.json");
//create

const addablecompaniesParams = ["companiesName", "stock"];
router.post("/", (req, res) => {
  try {
    const company = {};
    for (const param of addablecompaniesParams) {
      if (req.body[param]) company[param] = req.body[param];
    }
    company.fullName = req.body.firstName + " " + req.body.lastName;
    companies.push(company);
    res.status(201).send(companies);
  } catch (error) {
    res.status(404).send("something is not good");
  }
});
///CRUD company
// router.post("/", (req, res) => {});
const filterablecompanyParams = ["city", "name"];

router.get("/", (_, res) => {
  // res.send(companies);
  res.status(200).send(companies.slice(0, 19));
});
//UDate
router.patch("/:id", (req, res) => {
  try {
    const idx = companies.findIndex((f) => f.id === parseInt(req.params.id));
    const company = companies[idx];
    console.log(idx);
    for (const param of addablecompanyParams) {
      if (req.body[param]) company[param] = req.body[param];
    }
    company.fullName = req.body.firstName + " " + req.body.lastName;
    res.send(company);
  } catch (error) {
    res.status(404).send("something is not good");
  }
});
//Delete

router.delete("/", (_, res) => {
  try {
    console.log("company");
    res.send(companies);
  } catch (error) {
    res.status(404).send("something is not good");
  }
});
module.exports = router;
