import express from "express";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from "url";
import fs from 'fs';

const app = express();
const PORT = 2121;

app.use(express.json());
app.use(morgan('dev'));

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const dataPath = path.join(__dirname, 'data', 'inventory.json');
    const inventory = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    res.render('index', { inventory });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost${PORT}`);
});