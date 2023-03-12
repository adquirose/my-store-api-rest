const express = require('express');
const cors = require('cors')
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')
const app = express();
const port = 3005;
const whitelist = [
  'http://localhost:8080/',
  'https://206.62.252.185'
]
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true)
    }else{
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(options));
app.use(express.json()) // para recibir informacion de tipo JSON por post
app.get('/', (req, res) => {
  res.send("Hola mi server en express")
})
routerApi(app);
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`mi port ${port}`)
})
