const axios = require("axios");
require('dotenv').config()

const key = process.env.KEY
const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {
    function: 'TIME_SERIES_DAILY',
    symbol: 'tesla',
    outputsize: 'compact',
    datatype: 'json'
  },
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});