import { Router } from 'express'

const router = Router();


router.get('/employee/dashboard', (req, res) => {
    res.sendFile(process.cwd() + '/public/employee/dashboard.html');
});

router.get('/employee/create', (req, res) => {
    res.sendFile(process.cwd() + '/public/employee/create.html');
});

router.get('/employee/createbill', (req, res) => {
    res.sendFile(process.cwd() + '/public/employee/createBill.html');
});

router.get('/employee/searchbill', (req, res) => {
    res.sendFile(process.cwd() + '/public/employee/searchBill.html');
});



export default router;