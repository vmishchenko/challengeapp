var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    vipStatus: Boolean,
    value: Int32Array
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Users", UserSchema);