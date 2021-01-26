const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

require('dotenv/config');

const app = express();

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ynd6p.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333);