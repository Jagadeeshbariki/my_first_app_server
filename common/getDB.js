
var mongo = require('mongodb');

// mongodb+srv://Jaga:Jaga%402000@myfirstapp.wxlvhp3.mongodb.net/

async function getDB(){
    var client = mongo.MongoClient;
    var server = await client.connect(process.env.MONGO_URL);
    var db = server.db('School');
    return db
}

module.exports = getDB;