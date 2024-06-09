const express = require('express')
const path = require('path')
const app = express()
module.exports = app
const port = 3000



app.use(express.static('files'))

app.use(express.static(path.join(__dirname, '.', 'public')));

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '.', 'public/index.html'))
    // res.sendFile('/Users/laurenmhale/Coding/Fullstack_Academy/capstone_project/iSign1.0/public/index.html')
  })


  // app.get('/', (req, res, next) => {
  //   res.sendFile(path.join(__dirname, '.', 'src', 'index.html'));
  // });


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

