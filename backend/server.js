const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const kontaktRoute = require('./routes/kontakt');

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', kontaktRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});