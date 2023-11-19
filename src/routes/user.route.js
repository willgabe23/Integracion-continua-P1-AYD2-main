const express = require('express');
const passport = require('passport');
const req = require('express/lib/request');
const router = express.Router();
//const bd = require('../usuarios');


router.get('/', (req, res) => {
    res.send('hola mundo');
})

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', passport.authenticate('login',{
    successRedirect:'/index',
    failureRedirect:'/login',
    passReqToCallback:true
}));


router.get('/index', (req, res)=>{
    res.render('index');
})


router.get('/salir', (req, res)=>{
    req.logout();
    res.render('login');
})

router.get('/registrar', (req, res)=>{
    req.logout();
    res.render('registrar');
})

router.get('/modificar', (req, res)=>{
    res.render('modificar');
})

router.post('/modificar', passport.authenticate('update',{
    successRedirect:'/index',
    failureRedirect:'/modificar',
    passReqToCallback:true
}));

router.post('/registrar', passport.authenticate('registrar',{
    successRedirect:'/login',
    failureRedirect:'/registrar',
    passReqToCallback:true
}));




module.exports = router;


