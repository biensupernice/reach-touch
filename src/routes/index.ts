import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.send('Happy Hacking! 🚀'));

export { router };
