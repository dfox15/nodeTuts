const request = require('request')
const dotenv = require('dotenv')

const forecast = (latitude, longitude, callback) => {
    const url =
        'http://api.weatherstack.com/current?access_key=' +
        dotenv.config().parsed.API_KEY +
        '&query=' +
        latitude.toString() +
        ',' +
        longitude.toString() +
        '&units=f'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log(
                response.body.current.weather_descriptions[0] +
                    '. It is currently ' +
                    response.body.current.temperature +
                    ' degrees out. It feels like ' +
                    response.body.current.feelslike +
                    ' degrees out.'
            )
        }
    })
}

module.exports = forecast
