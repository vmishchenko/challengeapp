var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    userId: Int32Array,
    taskId: Int32Array,
    date: Date,
    finish: Boolean
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Users", UserSchema);