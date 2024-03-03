const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    email: {
        type: String,
        require: true,
    },
    address: String,
    image: {
        type: String,
        default: "https://images.unsplash.com/photo-1707334459557-e3034e158035?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // set: (v) => v===""?"https://images.unsplash.com/photo-1707334459557-e3034e158035?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D":v,
    },
    pincode: Number,
    username: String,
    country: String,
    password: String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;