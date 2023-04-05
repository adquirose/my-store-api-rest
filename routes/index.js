const express = require('express')
const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router')
const customersRouter = require('./customers.router');
const ordersRouter = require('./orders.router');

const router = express.Router()

function routerApi(app){
  app.use('/api/v1',router)
  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)
  router.use('/users',usersRouter)
  router.use('/customers', customersRouter)
  router.use('/orders', ordersRouter)
}
module.exports = routerApi
