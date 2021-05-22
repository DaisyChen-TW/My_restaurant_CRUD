// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')

const exphbs = require('express-handlebars')
//const restaurantList = require('./restaurant.json')

mongoose.connect('mongodb://localhost/my-restaurant',{useNewUrlParser: true ,useUnifiedTopology: true})

const db = mongoose.connection

db.on('error', () =>{
    console.log('mongodb error!')
})

db.once('open', () => {
    console.log('mongodb connected!')
})

// routes setting
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))

app.set('view engine', 'handlebars')

app.use(express.static('public'))

// app.get('/', (req, res) => {
//    res.render('index', { restaurants: restaurantList.results })
// })

app.get('/',(req,res) =>{
//拿到所有todo的資料
    Restaurant.find()
      .lean()
      .then(restaurants => res.render('index', { restaurants }))
      .catch(error => console.log(error))
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  // const restaurants = Restaurant.results.filter(Restaurant => {
  //   return Restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  // })
  console.log('req',req)
  res.render('index', { Restaurant: Restaurant, keyword: keyword })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
   const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
