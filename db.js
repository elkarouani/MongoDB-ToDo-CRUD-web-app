const MongoClient = require("mongoDB").MongoClient;
const ObjectID = require("mongoDB").ObjectID;
const dbname = "crud_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions = {urlParser : true}; 
