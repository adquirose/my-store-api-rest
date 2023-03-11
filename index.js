const express = require('express');
const routerApi = require('./routes')
const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/error.handler')
const app = express();
const port = 3005;
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
