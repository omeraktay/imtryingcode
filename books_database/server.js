import express from "express";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from "url";
import Book from './models/Books.js';
import connecDB from './config/db.js';
import favicon from "serve-favicon";

const app = express();
const PORT = 1414;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(morgan('dev'));

connecDB();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/', async (req, res) => {
    try {
        const inventory = await Book.find();
        res.render('index', { inventory });
    } catch (err) {
        res.status(500).json({message: err.message});
    }    
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});