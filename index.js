const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('frontend'))
app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
//res.sendFile
//res.json
app.get('/login', (req, res) => res.send('Login'))
app.get('/register', (req, res) => res.send('Register'))

var student = {"name" : "Raviteja Nagishetti",
               "college" : "VNRVJIET",
               "regno": "112323232"}

app.get('/data', (req, res) => res.json(student))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))