const express = require('express')
const app = express()
const port = process.env.PORT.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World! from ',process.env.PORT)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})