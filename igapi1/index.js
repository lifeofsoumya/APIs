// 150/month
const axios = require("axios");
require('dotenv').config()

const key = process.env.KEY
const options = {
  method: 'GET',
  url: 'https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile',
  params: {ig: 'lifeofsoumya', response_type: 'short', corsEnabled: 'false'},
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});