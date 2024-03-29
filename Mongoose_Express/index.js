const express = require('express');
const app = express();
const path =  require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

const categories = ['fruit', 'vegetable', 'dairy'];

app.get('/products', async (req, res) => {
  const products = await Product.find({});
  res.render('products/index', { products });
})

app.get('/products/new', (req, res) => {
  res.render('products/new', { categories });
})

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
  res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true, new: true});
  res.redirect(`/products/${product._id}`);
})

app.post('/products', async (req, res) => {
  const { name , price , category } = req.body;
  const newProduct = new Product({name, price, category});
  newProduct.save();
  res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req,res) => {
  const { id } = req.params;
  const product = await Product.findById(id)
  res.render('products/show', { product })
})

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const deletedProdcut= await Product.findByIdAndDelete(id);
  res.redirect('/products');
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`)
})
