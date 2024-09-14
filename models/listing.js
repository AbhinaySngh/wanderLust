const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        default: 
        "https://unsplash.com/photos/a-view-of-the-golden-gate-bridge-from-the-beach-dL2du5DXHeA",
        set: (v) => v === ""
         ? "https://unsplash.com/photos/a-view-of-the-golden-gate-bridge-from-the-beach-dL2du5DXHeA" : v
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;