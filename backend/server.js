const express = require('express');
const cors = require('cors');
import { PORT } from '../config';
const morgan = require('morgan');
const bodyParser = require('body-parser');

const contactRoute = require('./routes/contact').default;
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

app.listen(PORT, () => {
    console.log(`Server is running on https://localhost:${PORT}`);
});