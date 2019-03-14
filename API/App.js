const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')

const PORT = 8000

/** Database variables **/

const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/epicare', {
    useNewUrlParser: true
}).then(() => {
    console.log('Succesfully connected to MongoDB')
}).catch((err) => {
    console.log('MongoDB is not running')
})

const Slot = require('./Models/Slots.js')

var Timeline = mongoose.model('Timeline', Slot, 'timeline')

/**  **/

app.use("/Public", express.static(__dirname + "/Public"))
app.use("/Images", express.static(__dirname + "/Images"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set('views', __dirname + '/Views/')
app.set('view engine', 'ejs')

var routes = require('./Server/Routes.js')

routes(app, Timeline)

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})
