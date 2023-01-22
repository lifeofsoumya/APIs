const axios = require("axios");
require('dotenv').config()

const key = process.env.KEY
const options = {
  method: "GET",
  url: "https://yh-finance.p.rapidapi.com/auto-complete",
  params: { q: "tesla", region: "US" },
  headers: {
    "X-RapidAPI-Key": key,
    "X-RapidAPI-Host": "yh-finance.p.rapidapi.com"
  }
};

axios
  .request(options)
  .then(function(response) {
    console.log(response.data);
  })
  .catch(function(error) {
    console.error(error);
  });
