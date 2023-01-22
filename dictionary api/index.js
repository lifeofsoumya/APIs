const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  params: {term: 'application'},
  headers: {
    'X-RapidAPI-Key': '6d3f3b728amsh2d4bde72eb2b03ep1e50f9jsnafa25071e021',
    'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});