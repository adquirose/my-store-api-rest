const express = require('express')
const ProductsService = require('../services/product.service')
const router = express.Router()
const service = new ProductsService()

router.get('/', async (req, res) => {
  const products = await service.find()
  res.json(products)
})

// endpoint especifico antes de los dinamicos
router.get('/filter', (req,res)=> {
  res.send('yo soy un filter')
});

router.get('/:id', async (req, res, next)=> {
  try{
    const { id } = req.params
    const product = await service.findOne(id)
    res.status(200).json(product)
  }catch(error){
    next(error)
  }
});
router.post('/', async(req, res, next) => {
  try{
    const body = req.body
    const newProduct = await service.create(body)
    res.status(201).json({
      newProduct
    })
  }catch(error){
    next(error)
  }
});
router.patch('/:id', async(req, res, next) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const product = await service.update(id, body)
    res.json(product);
  }catch(error){
    next(error)
  }
});
router.delete('/:id', async(req, res, next) => {
  try{
    const { id } = req.params;
    const response = await service.delete(id)
    res.json(response);
  }catch(error){
    next(error)
  }
})
module.exports = router
