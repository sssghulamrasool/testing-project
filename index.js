const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://main-admin:SPWHrFNX5TrRDJz0@main-cluster.7ao59yg.mongodb.net/office-test?retryWrites=true&w=majority",
  { useNewUrlParser: true },
  console.log("DATABASE CONNECYED")
);
const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const Model = mongoose.model("user", schema);
app.use(express.json());

app.get("/", async (req, res) => {
  const data = await Model.find();
  return res.status(200).json({
    status: 200,
    message: data.length,
    data,
  });
});
app.post("/", async (req, res) => {
  const data = await Model.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  return res.status(200).json({
    status: 200,
    message: data,
  });
});
app.listen(8080, console.log("SERVER IS RUNNING"));
