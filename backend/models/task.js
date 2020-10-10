var mongoose = require("mongoose");

var confSchema = new mongoose.Schema({
	title: String,
	startDate: Date,
	endDate: Date,
	valuePoint: Int32Array,
	type: String,
	userId: Int32Array
});

module.exports = mongoose.model("Tasks", confSchema);