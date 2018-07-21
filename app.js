const express = require("express");
const app = express();
app.get('/' , (req , res) =>{
	res.send("pikaaaaaa");
})
var port = process.env.port || 8888 ;
app.listen(port);
console.log('Running');