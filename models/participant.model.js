const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    age: {
        type: Number,
        require: true,
    },
    rallyType: {
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
    tournamentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tournament",
        require: true,
    },
    tournamentName: {
        type: mongoose.Schema.Types.String,
        ref: "Tournament",
        require: true,
    },
});

module.exports = mongoose.model("Participant", participantSchema);