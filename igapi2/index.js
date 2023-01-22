const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://instagram28.p.rapidapi.com/medias',
  params: {user_id: '4789550243', batch_size: '30'},
  headers: {
    'X-RapidAPI-Key': '6d3f3b728amsh2d4bde72eb2b03ep1e50f9jsnafa25071e021',
    'X-RapidAPI-Host': 'instagram28.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});