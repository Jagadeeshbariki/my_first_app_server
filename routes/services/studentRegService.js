const { studentgetDAO, studentpostDAO, loginDAO }= require("../DAO/studentDAO")

async function studentRegService(data){
    
    console.log("This is Student Register Service");
    var result =await studentpostDAO(data)
    return result;
}

async function studentGetService(){
    
    console.log("studentGetService");
    var result =await studentgetDAO()
    
    result= result.map((obj)=>{
        delete obj.PHone
        return obj
    })
    return result;
}

async function loginService(data){
   const result = await loginDAO(data)
   return result;
}

module.exports={
    studentGetService,
    studentRegService,
    loginService
}