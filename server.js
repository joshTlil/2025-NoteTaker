const express = require('express')
const path = require('path')
const app = express()
app.use(express.static("public"))

// const noteRouter = require('./routes/notes')

// app.use('/notes', noteRouter)

app.get('/notes', (req, res)=>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)
app.listen(3000)
