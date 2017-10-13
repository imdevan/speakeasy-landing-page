require('ignore-styles')
const bodyParser = require('body-parser')
const compression = require('compression')
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const fs = require('fs')
var cors = require('cors')

require('babel-register')({ ignore: /\/(build|node_modules)\//, presets: ['react-app'] })

if(process.env.NODE_ENV !== 'production'){
	require('dotenv').config()
}

// routes
const index = require('./routes/index')
const api = require('./routes/api')
const universalLoader = require('./universal')


const app = express()

// app.use(cors())
// use it before all route definitions
app.use(cors({origin: process.env.SERVER_BASE_URL}));
app.options('*', cors()); 

// Support Gzip
app.use(compression())

// Suport post requests with body data (doesn't support multipart, use multer)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Setup logger
app.use(morgan('combined'))

app.use('/', index)

// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.use('/api', api)

// Always return the main index.html, so react-router render the route in the client
app.use('/', universalLoader)

module.exports = app
