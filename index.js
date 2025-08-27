const express = require('express')
const app = express()
const phones = require('./phones.json');
const port = 5000

app.get('/', (req, res) => {
    res.send('Server Testing 123 Hello!')
  })
  
  app.get('/data', (req, res) => {
    res.send('Datas are coming!')
  }) 
app.get('/test', (req,res) => {
    res.send('data testing')
})
//phone demo data // 
app.get('/phone', (req, res) => {
    res.send('Its My Phone Data')
})

//actual phone data // 
app.get('/phones', (req, res) => {
    res.send(phones)
})



  app.listen(port, () => {
    console.log(`Test Server is running on port ${port}`)
  })