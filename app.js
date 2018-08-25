const dotenv = require('dotenv').config();
const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')




let app = express()
//app.use(express.static('../client'))


app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())

app.get('/updateSpreadsheet', routes.updateSpreadsheet)
app.get('/newYelp', routes.newYelp)
app.get('/yelpBusiness', routes.yelpBusiness)
app.post('/yelpSearch', routes.yelpSearch)




app.listen(process.env.PORT || 3000)