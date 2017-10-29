const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const notices = require('./notices.json')

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/notices', (req, res) => {
  setTimeout(() => {
    res.json(notices);
  }, 1000) // simulate delay
})

app.post('/new-notice', (req, res) => {
    const notice = req.body

    notice.id = notices.length
    notice.type = "first"
    notice.date = new Date()
    notice.owner = 'owner'

    notices.push(notice)
    res.send(req.body)
})

app.get('*', (req, res) => {
  res.send('wrong path')
})

app.listen(3000, () => {
  console.log('app listening on port 3000!')
})
