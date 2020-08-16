const request = require('request')
const dotenv = require('dotenv')
const API_KEY = process.env.API_KEY

const url =
    'http://api.weatherstack.com/current?access_key=' +
    dotenv.config().parsed.API_KEY +
    '&query=37.8267,-122.4233&units=f'

request(
    {
        url: url,
        json: true
    },
    (error, response) => {
        console.log(
            response.body.current.weather_descriptions[0] +
                '. It is currently ' +
                response.body.current.temperature +
                ' degrees out. It feels like ' +
                response.body.current.feelslike +
                ' degrees out.'
        )
    }
)

const geocodeURL =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGZveDE1IiwiYSI6ImNrZG91N3J3ajF2dG0yeGxqeW9rd2RsMGYifQ.6iKGnN1sYyrtOOUE9cF2jQ&limit=1'

request(
    {
        url: geocodeURL,
        json: true
    },

    (error, response) => {
        var latitude = response.body.features[0].center[1]
        var longitude = response.body.features[0].center[0]
        console.log('Latitude: ' + latitude + '\n' + 'Longitude: ' + longitude)
    }
)
