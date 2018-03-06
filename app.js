// home page will there will be a welcome section
// in the middle of the screen there will be a form where a student submit his id and choose adate
// after submitting the user will be directed to the result page

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("./db/mongoose");
const Data = require("./models/data");


const app = express();

app.set("PORT", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", {alert:false});
});

app.post("/", (req, res) => {
  let obj = req.body.obj;
  Data.findOne({ id: obj.id }).then(doc => {
    if (doc) {
      console.log('i am here');
      return res.render("index", { alert: true });
    }
   
    let dataObj = new Data(obj);
    dataObj.save().then((doc) => {
      res.redirect("/statistics");
    });
  });
});

app.get("/statistics", (req, res) => {

  Data.find().then(docs => {
    console.log(docs);
   
    res.render("result", { docs });
  });
});

app.listen(app.get("PORT"), () => {
  console.log(
    "Server has started on port " +
      app.get("PORT") + "! Press Ctrl+c to terminate..."
  );
});
