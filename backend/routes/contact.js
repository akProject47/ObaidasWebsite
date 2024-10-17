const express = require('express');
const router = express.Router();

router.get('/contact', (req, res) => {
    res.json({ message: 'Contact data here' });
});

module.exports = router;
