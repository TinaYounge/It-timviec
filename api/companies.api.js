const express = require("express");
const router = express.Router();
// const { companies } = require("../data/data.json");
// const { jobs } = require("../data/data.json");
const { companies } = require("../tools/out.json");
const { jobs } = require("../tools/out.json");
//create

// const addablecompaniesParams = ["companiesName", "stock"];
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

// const filterablecompanyParams = ["city", "name"];
// http:localhost:5000/companies?page=5
// http:localhost:5000/companies?/city

router.get("/", (req, res) => {
  try {
    const { city, page } = req.query;

    if (page) {
      const nth = parseInt(req.query.page);
      const a = (nth - 1) * 20;
      const b = nth * 20 - 1;
      res.status(202).send(companies.slice(a, b));
    } else if (city) {
      const city = req.query.city;
      const cities = city.split(",");
      jobsLocatedList = [];
      for (let i of jobs) {
        for (let j of cities) {
          if (i.city == j) {
            jobsLocatedList.push(i.companyId);
          }
        }
      }
      companiesLocatedList = [];
      for (let i of companies) {
        for (let j of jobsLocatedList) {
          if (i.id == j) {
            companiesLocatedList.push(i.name);
          }
        }
      }
      const result = [...new Set(companiesLocatedList)];
      res.status(202).send(result);
    } else {
      res.status(202).send(companies);
    }
  } catch (error) {
    res.status(404).send("something is not good");
  }
});

router.patch("/:id", (req, res) => {
  try {
    const idx = parseInt(req.params.id);
    console.log("req.params.id)", req.params.id);
    companies[idx].enterprise = "true";
    console.log(idx);
    res.status(202).send(companies[idx]);
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

router.delete("/:id", (req, res) => {
  const idx = req.params.id;
  console.log("idx", idx);
  const deleteCompany = companies.findIndex((element) => element.id === idx);
  console.log("deleteCompany", deleteCompany);
  if (deleteCompany === -1)
    return res.status(404).send("something is not good");
  companies.splice(deleteCompany, 1);
  res.send(companies);
});
module.exports = router;
