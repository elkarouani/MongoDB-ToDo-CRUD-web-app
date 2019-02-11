const MongoClient = require("mongoDB").MongoClient;
const ObjectID = require("mongoDB").ObjectID;
const dbname = "crud_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions = { useNewUrlParser : true };

const state = {
	db : null
};

const connect = (cb) => {
	if (state.db) {cb();} else {
		MongoClient.connect(url, mongoOptions, (err, client) => {
			if (err) {cb(err);} else {
				state.db = client.db(dbname);
				cb();
			}
		});
	}
}

const getPrimaryKey = (_id) => ObjectID(_id);

const getDB = () => state.db;

module.exports = {getDB, connect, getPrimaryKey};