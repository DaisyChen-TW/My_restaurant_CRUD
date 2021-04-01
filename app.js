// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

// require express-handlebars here
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')

mongoose.connect('mongodb://localhost/My_restaurant',{useNewUrlParser: true ,useUnifiedTopology: true})

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

app.get('/', (req, res) => {
   res.render('index', { restaurants: restaurantList.results })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
   const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
