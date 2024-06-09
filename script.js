const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')

const mongoose = require('./db')

const app = express()
const router = require('../backend/routes.js')

app.use(bodyparser.json)

app.use(cors({origin: 'http://localhost:4200'}))

app.listen(3000,()=>
console.log('server is started'))

app.use('/post',route)