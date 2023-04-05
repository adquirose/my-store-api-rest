const express = require('express')
const CustomerService = require('../services/customer.service')
const validatorHandler  = require('../middleware/validator.handler');
const { updateCustomerSchema, createCustomerSchema, getCustomerSchema } = require('../schemas/customer.schema');

const router = express.Router()
const service = new CustomerService()

router.get('/', async (req, res, next) => {
  try{
    const customers = await service.find()
    res.json(customers)
  }catch(error){
    next(error)
  }
})
router.get('/:id',
  validatorHandler(getCustomerSchema,'params'),
  async (req, res, next) => {
    try{
      const { id } = req.params
      const user = await service.findOne(id)
      res.status(201).json(user)
    } catch(error){
      next(error)
    }
})
router.post('/',
  validatorHandler(createCustomerSchema,'body'),
  async(req, res, next) => {
    try{
      const body = req.body
      const newUser = await service.create(body)
      res.status(201).json(newUser)
    } catch(error){
      next(error)
    }
})
router.patch('/:id',
  validatorHandler(getCustomerSchema, 'params'),
  validatorHandler(updateCustomerSchema,'body'),
  async(req, res, next) => {
    try{
      const { id } = req.params
      const body = req.body
      const user = await service.update(id, body)
      res.status(201).json(user)
    } catch(error){
      next(error)
    }
})
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
