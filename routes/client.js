import { Router } from 'express'
const router = Router();

router.get('/client/dashboard', (req, res) => {
    res.sendFile(process.cwd() + '/public/client/dashboard.html');
});

router.get('/client/create', (req, res) => {
    res.sendFile(process.cwd() + '/public/client/create.html');
});


router.post('/client/create', (req, res) => {
    //code for creating new client
});

router.get('/client/paybill', (req, res) => {
    res.sendFile(process.cwd() + '/public/client/payill.html');
});

router.post('/client/paybill', (req, res) => {
    //code for paying bill
});


router.get('/client/searchbill', (req, res) => {
    res.sendFile(process.cwd() + '/public/client/searchBill.html');
});

export default router;