const express = require('express');
const router = express.Router();

router.get('/kontakt', (req, res) => {
    res.json({ message: 'Kontakt data here' });
});

module.exports = router;
