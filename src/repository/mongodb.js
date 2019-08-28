const MongoClient = require('mongodb').MongoClient;
const mongoUrl = 'mongodb://localhost:27017';
const dbName = 'votejs';

function connect() {
    let client = new MongoClient(mongoUrl);
}