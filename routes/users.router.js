const express = require('express')
const faker = require('faker')

const router = express.Router()

router.get('/', (req, res) => {
  const { size } = req.query
  const limit = size || 10
  const users = []
  for(let index = 0; index< limit; index++){
    users.push({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      image: faker.image.avatar()
    })
  }
  res.json(users)
})

router.get('/:id', (req, res)=> {
  const { id } = req.params
  res.json(
    {
      id,
      name:'user1',
      age:40
    }
  )
})
module.exports = router
