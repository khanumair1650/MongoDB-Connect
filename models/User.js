const mongoose = require(`mongoose`)

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required:[true,"Please Enter an Email"]
    },
    firstname:{
        type: String,
        required:[true,"Please Enter a First Name"]
    },
    lastname:{
        type: String,
        required:[true,"Please Enter a Last Name"]
    },
    password:{
        type: String,
        required:[true,"Please Enter a Password"]
    },
    service:{
        type: String,
        required:[true,"Please Enter the service"]
    },
    bio:{
        type: String,
        required:[true,"Please Enter the Bio"]
    },
    pic:{
        type: String,
        required:[true,"Please Enter a Pic Url"]
    }
})
module.exports = mongoose.model(`User`,UserSchema);