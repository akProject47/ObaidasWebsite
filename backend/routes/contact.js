import { Router } from 'express';
const router = Router();

router.get('/contact', (req, res) => {
    res.json({ message: 'Contact data here' });
});

export default router;
