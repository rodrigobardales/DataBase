
import validator from 'validator';

//Moqup
const Users = [
    {
        username:'rodri',
        password:'password',
    },
    {
        username:'nimer',
        password:'tasadvertidoperro'
    },
    {
        username:'kiko',
        password:'test'
    }
]

/**
 * Validates credentials
 * @param {string} username 
 * @param {string} password 
 */
function validateUser(username, password){
    if(process.env.NODE_ENV === 'development'){
        //access moqup

        for (let index = 0; index < Users.length; index++) {
            const user = Users[index];
            if(validator.equals(user.username, username)){
                if(validator.equals(user.password, password)){
                    console.log("Login Sucessfull");
                    return true;
                }
                return false;
            }
        }

    }else if(process.env.NODE_ENV === 'production'){
        //access database
        return false;
    }
}

function login(req, res){
    const username = req.body.username //same as defined in the html login form
    const password = req.body.password
    
    if (validateUser(username, password)){
        if(true){ // change for correct validation
            // if its employee
            res.redirect('/employee/dashboard');
            //res.sendFile(process.cwd() + '/public/employee/dashboard.html');
        }else{
            // if its client
            res.redirect('/client/dashboard');
        }
    }else{
        //bad login
        res.status(401).redirect('/login');
    }
    
}

function logout(req, res){
    //delete the session
    //redirect page to login
    res.status(200).send({ message : "Hello Logout"});
}





export default {
    login,
    logout
}