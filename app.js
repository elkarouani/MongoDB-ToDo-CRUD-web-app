const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const db = require("./db");
const collection = "todo";

app.use(bodyParser.json());

db.connect((err) => {
	if (err) {
		console.log('unable to connect to database');
		console.log(err);
		process.exit(1);
	} else {
		app.listen(3000, () => {
			console.log('connected to database, app listening on port 3000');
		});
	}
})