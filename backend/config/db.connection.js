const mongoose = require("mongoose")

const ConnectTodb = async () => {
    try {
        const mongoURI = process.env.MONGO_URI ;
        await mongoose.connect(mongoURI);
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = ConnectTodb;