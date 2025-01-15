import express from "express";
import morgan from "morgan";
import router from "./routes/userRoutes.js";
import connectDB from "./config/db.js";

// Initialize express
const app = express();
const PORT = 1903;

// Middleware to patse JSON request bodies
app.use(express.json());

// Use morgan for logging requests in 'dev' format
app.use(morgan('dev'));

// Connect to MongoDB
connectDB();

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});