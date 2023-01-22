const axios = require("axios");
require('dotenv').config()

const key = process.env.KEY
const options = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/comments', // /playlist with id, params: {query: 'indGeek nodejs', hl: 'en', type: 'v', duration: 'l', sort: 'r'},
  params: {id: 'aPHOWtFN1Cg'},
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});