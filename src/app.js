const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();

const damkaRouter = require('./routes/damka-routes')

const publicDirectoryPath = path.join(__dirname, '../public')

require('./db/mongoose')

app.use(express.static(publicDirectoryPath))
app.use(cors());
app.use(express.json())
app.use(damkaRouter)

module.exports = app

