const express = require('express')
require('dotenv').config();
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.status(200).send('Hello World! from ',port)
})

app.get('/test',(req,res)=>{
  res.json({
    message:"bahut sahi, it's working",
    code:"kaayde mein raho"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})