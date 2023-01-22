// 150/month
const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile',
  params: {ig: 'lifeofsoumya', response_type: 'short', corsEnabled: 'false'},
  headers: {
    'X-RapidAPI-Key': '6d3f3b728amsh2d4bde72eb2b03ep1e50f9jsnafa25071e021',
    'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});