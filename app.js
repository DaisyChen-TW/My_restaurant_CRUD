// require packages used in the project
const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')

const exphbs = require('express-handlebars')
//const restaurantList = require('./restaurant.json')

mongoose.connect('mongodb://localhost/my-restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

// routes setting
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))

app.set('view engine', 'handlebars')

app.use(express.static('public'))

// app.get('/', (req, res) => {
//    res.render('index', { restaurants: restaurantList.results })
// })


//拿到所有todo的資料
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

//瀏覽一筆資料
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurant => res.render('detail', { restaurant }))
    .catch(error => console.log(error))
})


//待debug
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = Restaurant.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  })
  console.log('req', req)
  res.render('index', { restaurants: restaurants, keyword: keyword })
})


// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})
