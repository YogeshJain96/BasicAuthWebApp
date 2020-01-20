const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const db =
  "mongodb+srv://userName:Password@basics-qzlwg.mongodb.net/test?retryWrites=true&w=majority";
const User = require("../models/user");
mongoose.connect(db, err => {
  if (err) {
    console.log("Error" + err);
  } else {
    console.log("Connected to DB");
  }
});
//Base api/
router.get("/", (req, res) => {
  res.send("From API Route");
});
// api/register
router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log("error in saving" + error);
    } else {
      res.status(200).send(registeredUser);
    }
  });
});
// api/login
router.post("/login", (req, res) => {
  let userData = req.body;

  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log("login error" + error);
    } else {
      if (!user) {
        res.status(401).send("Invalid Email");
      } else if (user.password !== userData.password) {
        res.status(401).send("Invalid password");
      } else {
        res.status(200).send(user);
      }
    }
  });
});

router.get("/commonlist", (req, res) => {
  let commonList = [
    {
      _id: "1",
      name: "List Item",
      description: "List Description",
      date: "2020-01-20"
    },
    {
      _id: "2",
      name: "List Item",
      description: "List Description",
      date: "2020-01-20"
    },
    {
      _id: "3",
      name: "List Item",
      description: "List Description",
      date: "2020-01-20"
    },
    {
      _id: "4",
      name: "List Item",
      description: "List Description",
      date: "2020-01-20"
    },
    {
      _id: "5",
      name: "List Item",
      description: "List Description",
      date: "2020-01-20"
    }
  ];
  res.json(commonList);
});

router.get("/speciallist", (req, res) => {
  let specialList = [
    {
      _id: "1",
      name: "Confidential List Item",
      description: "Desc here",
      date: "2020-01-20"
    },
    {
      _id: "2",
      name: "Confidential List Item",
      description: "Desc here",
      date: "2020-01-20"
    },
    {
      _id: "3",
      name: "Confidential List Item",
      description: "Desc here",
      date: "2020-01-20"
    },
    {
      _id: "4",
      name: "Confidential List Item",
      description: "Desc here",
      date: "2020-01-20"
    },
    {
      _id: "5",
      name: "Confidential List Item",
      description: "Desc here",
      date: "2020-01-20"
    }
  ];
  res.json(specialList);
});

module.exports = router;
