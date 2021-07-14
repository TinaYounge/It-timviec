const express = require("express");
const router = express.Router();
const { companies } = require("../data/data.json");
const { jobs } = require("../data/data.json");

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

const filterablecompanyParams = ["city", "name"];

router.get("/", (req, res) => {
  try {
    // if(req.query)
    // const nth = parseInt(req.query.page);
    // const a = (nth - 1) * 20;
    // const b = nth * 20 - 1;
    // res.status(202).send(companies.slice(a, b));
    // city;
    const cityCompanies = req.query.city;
    console.log("cityCompanies", cityCompanies);
    const cityJobList = jobs.filter((params) => params.city == cityCompanies);
    const companiesIdList = [];
    for (let i of cityJobList) {
      companiesIdList.push(i.companyId);
    }
    companiesLocatedList = [];
    for (let i of companies) {
      for (let j of companiesIdList) {
        if (i.id == j) {
          companiesLocatedList.push(i.name);
        }
      }
    }
    const result = [...new Set(companiesLocatedList)];
    res.status(200).send(result);
  } catch (error) {
    res.status(404).send("something is not good");
  }
});

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
