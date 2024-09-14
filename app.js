const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderLust";

main()
  .then(() =>{
    console.log("connected to DB");
  }) .catch((err) =>{
    console.log(err);
  });

async function main() {
   await mongoose.connect(MONGO_URL); 
};

app.get("/", (req, res) =>{
    res.send("Hi, I am groot");
});

app.get("/testListing", async (req, res) =>{
    let sampleListing = new Listing({
        title: "My New Villa",
        description: "By the beach",
        price: 12000,
        location: "Motihari, Bihar",
        country: "India"
    });

    await sampleListing.save();
    console.log("sample was saved");
    res.send("successful testing");
});


app.listen(8080, () =>{
    console.log("server is listening to port 8080");
});