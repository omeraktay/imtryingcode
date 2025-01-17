import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/MyBookInventory');
        console.log(`Connected to MongoDB: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error connecting dataabase: ${error}`);
        process.exit(1);
    }
};

export default connectDB;