const express = require('express')
const request = require('request')
require('dotenv').config()
const app = express()
const port = 3000
const apiKey = process.env.IMDB
// console.log(apiKey)

app.get('/movie/:name', (req, res) => {
    const movieName = req.params.name
    const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`

    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            const data = JSON.parse(body)
            const rating = data.imdbRating
            res.json(data)
        }
    })
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
