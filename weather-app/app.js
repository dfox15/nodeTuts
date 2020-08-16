const dotenv = require('dotenv')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const API_KEY = process.env.API_KEY

geocode('Boston', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})

forecast(44.1545, -75.7088, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
