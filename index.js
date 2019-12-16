import {} from 'dotenv/config'; 
import express from 'express';
import bp from 'body-parser';
import session from 'express-session';
import cp from 'cookie-parser'

//import routes
import auth from './routes/auth'
import employee from './routes/employee';
import client from './routes/client';

// change to switch from moqups to database
process.env.NODE_ENV = 'development';
//process.env.NODE_ENV = 'production';

//connect database
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@ec2-3-208-116-110.compute-1.amazonaws.com:9999/postgres');

//test DB
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


const server  = express();

server.use(bp.json());
server.use(cp())
server.use(bp.urlencoded({extended: true}));
server.use(session({
    key: 'user_id',
    secret: 'password',
    resave: false,
    saveUninitialized: false,
    cookie:{
        expires: 600000
    }
}));

function sessionChecker(req, res, next){
    if(req.session.user && req.cookies.user_id){
        res.redirect('/login');
    }else{
        next();
    }
}


server.use(auth);
server.use(employee);
server.use(client);


const port = (3000 || process.env.PORT);

server.use(express.static('public'));

//server.use('/',  (req, res)=>{
    //res.redirect('/login');
//})

server.listen(port, ()=>{
    console.log("Server Listening at port 3000");
})