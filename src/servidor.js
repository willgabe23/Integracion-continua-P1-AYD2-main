require('./routes/autenticacion');
const exp = require('constants');
const express = require('express');
const engine = require('ejs-mate');
const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
var path = require('path');


var app = express();


app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 8081));
//app.set('/static', express.static('dist'));
//app.use(webpackDevMiddleware(webpack(webpackConfig)));

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //false porque no recibirá ningun archivo pesado
app.use(session({
    secret:'mysecretsession',
    resave:false,
    saveUninitialized:false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next)=>{
    app.locals.loginMensaje = req.flash('loginMensaje');
    app.locals.msjRegistro = req.flash('msjRegistro');
    app.locals.msjUpdate = req.flash('msjUpdate');
    app.locals.user = req.user;
    next();
});


app.use('/', require('./routes/user.route'));


/* escuchando puerto */
app.listen(app.get('port'), ()=>{
    console.log('escuchando en el puerto: ', app.get('port'))
});

//min 38
//https://www.youtube.com/watch?v=uVltgEcjNww&t=110s