const express = require('express')
const app = express()
const cors = require('cors')
const phones = require('./phones.json');
const port = 5000


//middle ware 
app.use(cors());


app.get('/', (req, res) => {
    res.send('Server Testing 123 Hello!')
  })
  
  app.get('/data', (req, res) => {
    res.send('Datas are coming!')
  }) 
app.get('/test', (req,res) => {
    res.send('data testing')
})

//phones data // 
app.get('/phones', (req, res) => {
    res.send(phones)
})
//show phone data dynamically // 
app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const phone = phones.find(phone => phone.id === id) || {};
    res.send(phone)
})

  app.listen(port, () => {
    console.log(`Test Server is running on port ${port}`)
  })