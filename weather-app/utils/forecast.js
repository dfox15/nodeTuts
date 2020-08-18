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

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.error === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log(
                body.current.weather_descriptions[0] +
                    '. It is currently ' +
                    body.current.temperature +
                    ' degrees out. It feels like ' +
                    body.current.feelslike +
                    ' degrees out.'
            )
        }
    })
}

module.exports = forecast
