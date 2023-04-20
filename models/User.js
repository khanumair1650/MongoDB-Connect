const mongoose = require(`mongoose`)

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please Enter a Name"]
    },
    email:{
        type: String,
        required:[true,"Please Enter an Email"]
    },
    password:{
        type: String,
        required:[true,"Please Enter a Password"]
    },
    contactno:{
        type:Number,
        required:[true,"Please Enter a Contact Number"]
    },
    country:{
        type: String,
        required:[true,"Please Enter the Country"]
    },
})
module.exports = mongoose.model(`User`,UserSchema);