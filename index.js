const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.get('/main', (req, res) => res.send('Hello world'))
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))