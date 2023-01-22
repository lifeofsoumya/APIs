const axios = require("axios");
require('dotenv').config()

const key = process.env.KEY
const options = {
  method: 'GET',
  url: 'https://instagram28.p.rapidapi.com/medias',
  params: {user_id: '4789550243', batch_size: '30'},
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});