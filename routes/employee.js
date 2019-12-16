import { Router } from 'express'

const router = Router();


router.get('/employee/dashboard', (req, res) => {
    res.sendFile(process.cwd() + '/public/employee/dashboard.html');
});

router.get('/employee/create', (req, res) => {
    res.sendFile(process.cwd() + '/public/employee/create.html');
});

router.post('/employee/create', (req, res) => {
    //code for creating new employee
});

router.get('/employee/createbill', (req, res) => {
    res.sendFile(process.cwd() + '/public/employee/createBill.html');
});

router.get('/employee/searchbill', (req, res) => {
    res.sendFile(process.cwd() + '/public/employee/searchBill.html');
});

// ======================================================================
//imaginary table
const bills = [
    {
        paid: false,
        pendingFee: 11,
        balance: 3000,
    },
    {
        paid: true,
        pendingFee: 0,
        balance: 0,
    }
]

router.get('/api/employee/bills', (req, res) => {
    //code for exmple getting data to html
    //when doing a get method to this adress ther bill data will be sent
    res.status(200).json(bills);

});




export default router;