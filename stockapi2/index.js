const axios = require("axios");

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
    'X-RapidAPI-Key': '6d3f3b728amsh2d4bde72eb2b03ep1e50f9jsnafa25071e021',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});