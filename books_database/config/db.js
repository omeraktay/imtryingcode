import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/MyBooksDatabase')
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (err) {
        console.log(`Error connecting Mongodb: ${err}`);
        process.exit(1);
    }
};

export default connectDB;