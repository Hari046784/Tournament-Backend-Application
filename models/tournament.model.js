const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    startDate: {
        type: String,
        require: true,
    },
    endDate: {
        type: String,
        require: true,
    },
    email: {
        require: true,
        type: String,
        unique: true,
    },
    contactNumber: {
        require: true,
        type: String,
        unique: true,
    },
    status: {
        type: String,
        default: "Upcoming",
        require: true,
    },
});

module.exports = mongoose.model("Tournament", tournamentSchema);