import express from 'express';
import passport from 'passport';
import session from 'express-session';
import { Strategy as LocalStrategy } from 'passport-local';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import flash from 'connect-flash';
import bodyParser from 'body-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 4321;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'views')));

// Dummy User DataBase
const users = [
    {id: 1, username: 'admin', password: '123'},
    {id: 2, username: 'John', password: 'pass'},
    {id: 3, username: 'Jane', password: 'word'}
];

passport.use(new LocalStrategy((username, password, done) => {
   const user = users.find(u => u.username === username && u.password === password);
   if(!user){
    return done(null, false, { message: 'Invalid credentials.' });
   }
   return done(null, user);
}));

passport.serializeUser((user, done) => {done(null, user.id);});
passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id === id);
    done(null,user);
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    const errorMessage = req.flash('error');
    const messageQuery = errorMessage.length > 0 ? `?error=${encodeURIComponent(errorMessage[0])}` : ''; //'?error' pass to queryString.
    res.redirect(`/login-form${messageQuery}`);
});

app.get('/login-form', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: 'login',
    failureFlash: true
}));

app.get('/dashboard', (req, res) => {
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    res.redirect(`/dashboard.html?username=${encodeURIComponent(req.user.username)}`);
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});