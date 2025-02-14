import express from "express";
import morgan from "morgan";
import connectDB from "./config/db.js";
import Book from "./models/Books.js";
import path from 'path';
import { fileURLToPath } from "url";
import serveFavicon from "serve-favicon";

const app = express();
const PORT = 1903;

app.use(express.json());
app.use(morgan('dev'));

connectDB();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(serveFavicon(path.join(__dirname, 'public', 'favicon.ico')));

//To get all books from database
app.get('/', async (req, res) => {
    try {
        const inventory = await Book.find();
        res.render('index', {  inventory});
    } catch (err) {
        res.status(500).json({message: `Error fetching inventory: ${err}`});
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on httm://localhost:${PORT}`);
});