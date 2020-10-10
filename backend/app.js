const 	express     = require("express"),
	    app         = express(),
	    mongoose    = require("mongoose");
    
//requiring routes
//const	 indexRoutes    = require("./routes/index");

const dbUrl = process.env.DATABASEURL || "mongodb://localhost:27017/chall_db";

mongoose.connect(dbUrl, { 
	useUnifiedTopology: true,                         
	useNewUrlParser: true,                            
})
.then(() => console.log('DB Connected!'))
.catch(err => {
console.log("DB Connection Error: " + err.message);
});

// app.use("/", indexRoutes);

app.get("/",function(req,res){
	res.send("Main page here");
})

app.listen(8080, function(){
	console.log('App successfully has started');
});