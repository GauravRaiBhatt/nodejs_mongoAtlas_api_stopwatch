const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World! from ',port)
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