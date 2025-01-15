import express from "express";
import morgan from "morgan";
import router from "./routes/userRoutes.js";
import connectDB from './config/db.js'

const app = express();
const PORT = 1903;

app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});