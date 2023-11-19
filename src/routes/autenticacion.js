
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
//import  Usuarios  from '../usuarios';

let usuarios = [
    {
        "email": "practica2@gmail.com",
        "pass": "pas",
        "name": "PRACTICA2",
        "id": 0
    },
    {
        "email": "ayd@gmail.com",
        "pass": "pas",
        "name": "AYD2",
        "id": 1
    }
];

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    for (let index = 0; index < usuarios.length; index++) {
        const user = usuarios[index];
        if (user.id == id) {
            done(null, user);
            break;
        }

    }
});

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    console.log(usuarios);
    let flag = false;
    let mi_usu;
    for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];
        if (element.email == email && element.pass == password) {
            flag = true;
            mi_usu = element;
            break;
        }
    }

    if (!flag) {
        return done(null, false, req.flash('loginMensaje', 'autenticacion incorrecta'));
    }
    done(null, mi_usu);

}));


passport.use('update', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    console.log(usuarios);
    let mi_usu;
    for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];
        if(element.name == req.body.username){
            return done(null, false, req.flash('msjUpdate', 'el username ya existe'));
        }
        if (element.email == email) {
            usuarios[element.id].name = req.body.username;
            usuarios[element.id].pass = password;
            mi_usu = usuarios[element.id];
            break;
        }
    }
    done(null, mi_usu);

}));



passport.use('registrar', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {
    let flag = false;
    console.log(usuarios);
    for (let index = 0; index < usuarios.length; index++) {
        const element = usuarios[index];
        if (element.email == email) {
            flag = true;
            break;
        }
    }
    if (flag) {
        return done(null, false, req.flash('msjRegistro', 'el email ya existe'));
    }
    let new_usu = {
        "email": email,
        "pass": password,
        "name": req.body.name,
        "id": usuarios.length
    };
    usuarios.push(new_usu);
    done(null, new_usu);

}));

