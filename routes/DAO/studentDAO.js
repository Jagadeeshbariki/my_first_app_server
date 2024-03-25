var getDB = require('../../common/getDB')
async function studentpostDAO(data){

    // connect with the DB
    // Perferm some operations on the DB
    // Here we have to connect with the DB

    // monogoDB Server - Database - Collections - documwnts
   var db =await getDB()
   var collection = db.collection('Students');
   const result = await collection.insertOne(data)

   return result;

//    We have to handle the expception at the starging point of the process i.e at controller
    console.log("This is the student DAO")
}

async function studentgetDAO(){

    

    var db = await getDB()
    var collection= db.collection("Students");

    var result =await collection.find().toArray();
    console.log(result)
    return result;

    console.log("This is the student get DAO")


}

async function loginDAO(data){
    const {UserID,pwd} = data;
    const db = await getDB();
    const collection = db.collection("Students");
    const result = collection.find({UserID,pwd}).toArray();
    return result
}

module.exports={
    studentgetDAO,
    studentpostDAO,
    loginDAO
}