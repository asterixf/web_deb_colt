const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const p = new Product({
//   name: 'apple',
//   price: '8.50',
//   category: 'fruit'
// })

// p.save().then(p => {
//   console.log(p)
// }).catch(e => {
//   console.log(e)
// })

const seedsProduct = [
  {
  name: 'orage',
  price: '12.20',
  category: 'fruit'
  },
  {
    name: 'milk',
    price: '20',
    category: 'dairy'
  },
  {
    name: 'carrot',
    price: '7.25',
    category: 'vegetable'
  },
  {
    name: 'berry',
    price: '42.70',
    category: 'fruit'
  },
  {
    name: 'corn',
    price: '10',
    category: 'vegetable'
  }
]

Product.insertMany(seedsProduct)
.then(res => {
  console.log(res)
})
.catch(e => {
  console.log(e)
})
