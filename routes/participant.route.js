const express = require("express");
const router = express.Router();
const Participant = require("../models/participant.model");

// To Create participant
router.post("/participant/create", (req, res) => {
  try {
    let newParticipant = new Participant(req.body);
    newParticipant.save((err, data) => {
      if (err) {
        return res.status(400).send({
          message: "Error while adding a new participant data",
        });
      }
      res.status(201).send({
        id: data._id,
        message: "participant details has been added successfully",
      });
    });
  } catch (error) {
    res.status(500).send({
      message: "internal Server Error",
    });
  }
});

// // To get all the participant details
router.get("/participant/all", (req, res) => {
  try {
    Participant.find((err, data) => {
      if (err) {
        return res.status(400).send({
          message: "Error while retrieving participant data",
        });
      }
      res.status(200).send(data);
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({
      message: "internal Server Error",
    });
  }
});

// To get the participant details using Id
router.get("/participant/:id", (req, res) => {
  try {
    Participant.findById({ _id: req.params.id }, (err, data) => {
      if (err) {
        // console.log("Error:", err);
        return res.status(400).send({
          message: "Error while retrieving the particular tournament data",
        });
      }
      res.status(200).send(data);
    });
  } catch (error) {
    res.status(500).send({
      message: "internal Server Error",
    });
  }
});

// To edit the participant details
router.put("/participant/edit/:id", (req, res) => {
  try {
    Participant.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      (err, data) => {
        if (err) {
          // console.log("Error:", err);
          return res.status(400).send({
            message: "Error while updating an existing participant data",
          });
        }
        res.status(201).send({
          participantId: req.params.id,
          message: "participant details has been updated successfully",
        });
      }
    );
  } catch (error) {
    res.status(500).send({
      message: "internal Server Error",
    });
  }
});

// To delete the participant details
router.delete("/participant/delete/:id", (req, res) => {
  try {
    Participant.deleteOne({ _id: req.params.id }, (err, data) => {
      if (err) {
        return res.status(400).send({
          message: "Error while deleting an existing participant data",
        });
      }
      res.status(200).send({
        message: "participant details has been deleted successfully",
      });
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({
      message: "internal Server Error",
    });
  }
});

// get participant of a tournament
router.get("/participantoftournament/:tournamentId", (req, res) => {
  try {
    Participant.find({ tournamentId: req.params.tournamentId}, (err, data) => {
      if (err) {
        console.log("Error:", err);
        return res.status(400).send({
          message: "Error while getting an participant data",
        });
      }
      res.status(200).send(data);
    })
  } catch (error) {
    res.status(500).send({
      message: "internal Server Error",
    });
  };
});

module.exports = router;
