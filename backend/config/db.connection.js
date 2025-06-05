const mongoose = require("mongoose")

const ConnectTodb = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/faang_predictor';
        await mongoose.connect(mongoURI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = ConnectTodb;