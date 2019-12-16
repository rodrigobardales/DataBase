import { Router } from 'express'
import authController from '../controllers/auth';

const router = Router();


router.post('/login', (req, res) => { authController.login(req, res) });


router.get('/login', (req, res) => {
    res.sendFile(process.cwd() + '/public/login.html');
});

router.post('/logout', (req, res) => { authController.logout(req, res) });


export default router;