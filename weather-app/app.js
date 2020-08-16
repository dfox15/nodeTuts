const request = require('request')
const dotenv = require('dotenv')
const API_KEY = process.env.API_KEY

// const url =
//     'http://api.weatherstack.com/current?access_key=' +
//     dotenv.config().parsed.API_KEY +
//     '&query=37.8267,-122.4233&units=f'

// request(
//     {
//         url: url,
//         json: true
//     },
//     (error, response) => {
//         if (error) {
//             console.log('Unable to connect to weather service!')
//         } else if (response.body.error) {
//             console.log('Unable to find location')
//         } else {
//             console.log(
//                 response.body.current.weather_descriptions[0] +
//                     '. It is currently ' +
//                     response.body.current.temperature +
//                     ' degrees out. It feels like ' +
//                     response.body.current.feelslike +
//                     ' degrees out.'
//             )
//         }
//     }
// )

// const geocodeURL =
//     'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGZveDE1IiwiYSI6ImNrZG91N3J3ajF2dG0yeGxqeW9rd2RsMGYifQ.6iKGnN1sYyrtOOUE9cF2jQ&limit=1'

// request(
//     {
//         url: geocodeURL,
//         json: true
//     },

//     (error, response) => {
//         if (error) {
//             console.log('Unable to connect to location services')
//         } else if (response.body.features.length === 0) {
//             console.log('Unable to find location. Try another search!')
//         } else {
//             var latitude = response.body.features[0].center[1]
//             var longitude = response.body.features[0].center[0]
//             console.log('Latitude: ' + latitude + '\n' + 'Longitude: ' + longitude)
//         }
//     }
// )

const geocode = (address, callback) => {
    const url =
        'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
        encodeURIComponent(address) +
        '.json?access_token=pk.eyJ1IjoiZGZveDE1IiwiYSI6ImNrZG91N3J3ajF2dG0yeGxqeW9rd2RsMGYifQ.6iKGnN1sYyrtOOUE9cF2jQ&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

geocode('Philadelphia New York', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
