import express from 'express';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 1212;

app.use(express.json());
app.use(morgan('dv'));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const recipes = [
    { 
        name: "Lasagna", 
        ingredients: [
            { ingName: "pasta", quantity: "200g" },
            { ingName: "tomato sauce", quantity: "150ml" },
            { ingName: "cheese", quantity: "100g" }
        ]
    },
    { 
        name: "Milkshake", 
        ingredients: [
            { ingName: "milk", quantity: "300ml" },
            { ingName: "ice cream", quantity: "2 scoops" }
        ]
    },
    { 
        name: "Avocado Toast", 
        ingredients: [
            { ingName: "avocado", quantity: "1 piece" },
            { ingName: "bread", quantity: "2 slices" },
            { ingName: "salt", quantity: "to taste" },
            { ingName: "pepper", quantity: "to taste" }
        ]
    },
    { 
        name: "Pancakes", 
        ingredients: [
            { ingName: "flour", quantity: "150g" },
            { ingName: "milk", quantity: "200ml" },
            { ingName: "sugar", quantity: "50g" },
            { ingName: "eggs", quantity: "2 pieces" }
        ]
    },
    { 
        name: "Spaghetti", 
        ingredients: [
            { ingName: "pasta", quantity: "200g" },
            { ingName: "tomato sauce", quantity: "150ml" },
            { ingName: "meatballs", quantity: "6 pieces" }
        ]
    }
];

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/recipes', (req, res) => {
    res.render('recipes', { recipes });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});