const express = require("express");
const fs = require("fs");
var path = require('path');

const app = express();

function authentication(req, res, next) {
	var authheader = req.headers.authorization;
	console.log(req.headers);

	if (!authheader) {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err)
	}

	var auth = new Buffer.from(authheader.split(' ')[1],
	'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	if (user == 'admin@example.com' && pass == 'password') {
		res.send("Login Successful")
	} else {
		var err = new Error('You are not authenticated!');
		res.setHeader('WWW-Authenticate', 'Basic');
		err.status = 401;
		return next(err);
	}

}

app.use(authentication)
app.use(express.static(path.join(__dirname, 'public')));


app.listen((3000), () => {
	console.log("Server is Running ");
})