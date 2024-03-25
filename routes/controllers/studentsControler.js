const expreess = require('express');
const StdRouter = expreess.Router();
const {studentRegService, studentGetService, loginService }= require('../services/studentRegService')
// https://localhost:2020/std/std-reg    Post methos

StdRouter.post('/std-reg', async function(req, res, next){   //we have received the rquest here
    // First we have to take the data fromt the req
    // And send the res 
   try{
    var {data} = req.body;
    console.log(data)
    var result =await studentRegService(data);
    res.send(result)
   }
   catch(ex){
    console.log(ex)
    res.send(ex.message)
   }
})

StdRouter.post('/login', async function (req, res, next){
    const {data} = req.body;
    const result = await loginService(data)
    res.send(result);
})

StdRouter.get('/std-get',async function(req, res){
    // same as above mentionsed steps
    console.log("Get request received successfully");
    var result = await studentGetService();
    res.send(result)
})




module.exports = StdRouter;