require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/movies');
const ActorRoute = require('./routes/actors');
const Producerroute = require('./routes/producer');
const bodyParser = require('body-parser');

const app = express();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE_URL);

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

const database = mongoose.connection;

app.use('/api', routes)
app.use('/actor', ActorRoute)
app.use('/producer', Producerroute)
// app.use('/photo',photoRoute)
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.use(express.json());
app.listen(3000, () => {
    console.log('Server Started at ${3000}');
})