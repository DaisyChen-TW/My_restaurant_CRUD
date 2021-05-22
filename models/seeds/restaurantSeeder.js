const mongoose = require('mongoose')
const Restaurant = require('../restaurant')
const RestaurantData = require('./restaurantData.json')


mongoose.connect('mongodb://localhost/my-restaurant',{ useNewUrlParser: true ,useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', () =>{
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
    for (let i = 0; i < RestaurantData.results.length; i++) {
        Restaurant.create({
        name: RestaurantData.results[i].name,
        name_en: RestaurantData.results[i].name_en,
        category: RestaurantData.results[i].category,
        image: RestaurantData.results[i].image,
        location: RestaurantData.results[i].location,
        phone: RestaurantData.results[i].phone,
        google_map: RestaurantData.results[i].google_map,
        rating: RestaurantData.results[i].rating,
        description: RestaurantData.results[i].description,
        })
    }

    console.log('done')
})


