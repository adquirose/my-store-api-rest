const express = require('express')
const productsRouter = require('./products.router');
const usersRouter = require('./users.router')

const router = express.Router()
function routerApi(app){
  app.use('/api/v1',router)
  router.use('/products', productsRouter)
  router.use('/users',usersRouter)
}
module.exports = routerApi
