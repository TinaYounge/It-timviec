const fs = require("fs");
const { url } = require("inspector");
const data = require("../data/data.json");
const companies = data.companies;
function addImgLogo(company) {
  // company.logoCompany = "tools/pic.jpg";
  company.logoCompany = `https://i.pinimg.com/564x/27/53/f0/2753f0b5aa8e11d8a7147b17422e1e35.jpg`;
}

for (const company of companies) {
  addImgLogo(company);
}
fs.writeFileSync("out.json", JSON.stringify(data, null, 2));
