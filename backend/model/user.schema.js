const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    leetcode: {
        type: Number,
        required: true,
        trim: true,
    },
    development: {
        type: Number,
        required: true,
        trim: true,
    },
    Totalscore: {
        type: Number,
        required: true,
        trim: true,
    },
})

module.exports = mongoose.model("user", userschema)