const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));
////////////////////////////////////////////////////////mongoDB-connect-and schemas//////////////////////////////////////////////////
mongoose.connect(`mongodb://localhost:27017/userDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const userSchema = {
  name: String,
  email: String,
  city: String,
};
const user = new mongoose.model("user", userSchema);

///////////////////////////////////////////////////////////home-routeing///////////////////////////////////////////////////////////////
app
  .route("/")
  .get(function (req, res) {
    user.find(function (err, founduser) {
      if (!err) {
        res.send(founduser);
      }
    });
  })
  .post(function (req, res) {
    const newuser = new user({
      name: req.body.name,
      email: req.body.email,
      city: req.body.city,
    });
    newuser.save(function (err) {
      if (!err) {
        res.send(newuser);
      } else {
        res.send(err);
      }
    })
  });
  /////////////////////////////////////////////////////////user route////////////////////////////////////////
  app
    .route("/:id")
    .get(function (req, res) {
      user.findOne({_id:req.params.id},function (err, founduser) {
        if (founduser) {
          res.send(founduser);
        } else {
          res.send(err);
        }
      });
    });

///////////////////////////////////////////////////////////////////server connection////////////////////////////////////////////////
let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}
app.listen(port, function () {
  console.log("Server is started successfully");
});
