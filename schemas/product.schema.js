const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const price = Joi.number().integer()
const description = Joi.string().min(10)
const imageUrl = Joi.string().min(4)
const categoryId = Joi.number().integer()
const limit = Joi.number().integer()
const offset = Joi.number().integer()
const price_min = Joi.number().integer()
const price_max = Joi.number().integer()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description.required(),
  imageUrl: imageUrl.required(),
  categoryId:categoryId.required()
})
const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description:description,
  imageUrl: imageUrl,
  categoryId:categoryId
})
const getProductSchema = Joi.object({
  id:id.required()
})
const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max: Joi.alternatives().conditional('price_min', {
    is: Joi.number(),
    then: Joi.required(),
  })
})
module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
  queryProductSchema
}
