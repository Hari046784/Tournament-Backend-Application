const express = require("express");
const router = express.Router();
const Tournament = require("../models/tournament.model");

// To Create Tournament
router.post("/tournament/create", (req, res) => {
  try {
    let newTournament = new Tournament(req.body);
    newTournament.save((err, data) => {
      if (err) {
        return res.status(400).send({
          message: "Error while adding a new tournament data",
        });
      }
      res.status(201).send({
        id: data._id,
        message: "tournament details has been added successfully",
      });
    });
  } catch (error) {
    res.status(500).send({
      message: "internal Server Error",
    });
  }
});

// // To get all the Tournament details
router.get("/tournament/all", (req, res) => {
  try {
    Tournament.find((err, data) => {
      if (err) {
        return res.status(400).send({
          message: "Error while retrieving tournament data",
        });
      }
      res.status(200).send(data);
    });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).send({
      message: "internal Server Error",
    });
  };
});

// To get the Tournament details using Id
router.get("/tournament/:id", (req, res) => {
    try{
        Tournament.findById({_id: req.params.id}, (err, data) => {
            if(err){
                // console.log("Error:", err);
                return res.status(400).send({
                    message: "Error while retrieving the particular tournament data"
                })
            }
            res.status(200).send(data);
        });
    } catch (error) {
        res.status(500).send({
            message: "internal Server Error"
        });
    };
});

// To edit the Tournament details
router.put("/tournament/edit/:id", (req, res) => {
    try{
        Tournament.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, (err, data) => {
            if(err){
                // console.log("Error:", err);
                return res.status(400).send({
                    message: "Error while updating an existing tournament data"
                })
            }
            res.status(201).send({
                tournamentId: req.params.id,
                message: "tournament details has been updated successfully"
            });
        });
    } catch (error) {
        res.status(500).send({
            message: "internal Server Error"
        });
    };
});

// To delete the Tournament details
router.delete("/tournament/delete/:id", (req, res) => {
    try{
        Tournament.deleteOne({_id: req.params.id}, (err, data) => {
            if(err){
                return res.status(400).send({
                    message: "Error while deleting an existing tournament data"
                })
            }
            res.status(200).send({
                message: "Tournament details has been deleted successfully"
            });
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send({
            message: "internal Server Error"
        });
    };
});

module.exports = router;
