var mongo= require('mongodb')

async function studentpostDAO(data){

    // connect with the DB
    // Perferm some operations on the DB
    // Here we have to connect with the DB

    // monogoDB Server - Database - Collections - documwnts
    var url ="mongodb+srv://Jaga:Jaga@2000@myfirstapp.wxlvhp3.mongodb.net/"
    var mongoclint = mongo.MongoClient;
    console.log("It's working")
   var server = await mongoclint.connect("mongodb+srv://Jaga:Jaga%402000@myfirstapp.wxlvhp3.mongodb.net/")
   
   var db = server.db("School")
   var collection = db.collection('Students');
   const result = await collection.insertOne(data)

   return result;

//    We have to handle the expception at the starging point of the process i.e at controller
    console.log("This is the student DAO")
}

async function studentgetDAO(){

    var mongoclient = mongo.MongoClient;
    var url = "mongodb+srv://Jaga:Jaga%402000@myfirstapp.wxlvhp3.mongodb.net/";
    var server =await mongoclient.connect(url);

    var db = server.db("School");
    var collection= db.collection("Students");

    var result =await collection.find().toArray();
    console.log(result)
    return result;

    console.log("This is the student get DAO")


}


module.exports={
    studentgetDAO,
    studentpostDAO
}