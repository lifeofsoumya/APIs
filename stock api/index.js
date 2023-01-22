const axios = require("axios");

const options = {
  method: "GET",
  url: "https://yh-finance.p.rapidapi.com/auto-complete",
  params: { q: "tesla", region: "US" },
  headers: {
    "X-RapidAPI-Key": "6d3f3b728amsh2d4bde72eb2b03ep1e50f9jsnafa25071e021",
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
