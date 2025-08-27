const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Server Testing 123 Hello!')
  })

  app.listen(port, () => {
    console.log(`Test Server is running on port ${port}`)
  })