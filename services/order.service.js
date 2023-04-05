const { models } = require('./../libs/sequelize')
const boom = require('@hapi/boom')

class OrderService{
  constructor(){

  }

  async create(data){
    const newOrder = await models.Order.create(data)
    return newOrder
  }
  async addItem(data){
    const newItem = await models.OrderProduct.create(data)
    return newItem
  }
  async find(){
  }
  async findOne(id){
    const order = await models.Order.findByPk(id,{
      include:[{
        association:'customer',
        include:['user']
      },
      'items'
      ]
    });
    if(!order){
      throw boom.notFound('order not found')
    }
    return order
  }
  async update(){

  }
  async delete(){

  }
}
module.exports = OrderService
