import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/chai", {
            useNewUrlParser: true,
            // Note: The image shows these options but they might be deprecated or implied in modern Mongoose
            // useUnifiedTopology: true, 
            // useCreateIndex: true, 
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;