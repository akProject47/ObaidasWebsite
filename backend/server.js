const express = require('express');
const cors = require('cors');
const config = require('../config');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const contactRoute = require('./routes/contact');
const path = require('path');


const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.use('/api', contactRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

app.listen(config.PORT, () => {
    console.log(`Server is running on ${config.API_URL}`);
});