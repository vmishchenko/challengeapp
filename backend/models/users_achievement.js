var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    userId: Int32Array,
    achievementId: Int32Array,
    date: Date
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Users", UserSchema);