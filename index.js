// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// app.use(express.json());

// app.listen(8080, ()=>{
//     console.log(`Server started on post: 8080 and ready to serve the request.`);
// });

// // Mongo Database connection 
// // mongoose.connect("mongodb://localhost:27017/student_database")
// // .then(()=>{
// //     console.log("====== mongo DB Connection successful ==========");
// // }).catch((error)=>{
// //     console.log(`======= Error occurred while connecting with mongo db=======`);
// //     console.log(error);  
// // });
// //
// async function dbConnection(){
//     try {
//        await mongoose.connect("mongodb://localhost:27017/student_database");
//        console.log("====== mongo DB Connection successful ==========");
//     } catch (error) {
//         console.log(`======= Error occurred while connecting with mongo db=======`);
//         console.log(error);  
//     }
// }
// dbConnection();

// // Schema
// const studentSchema = new mongoose.Schema(
//     {
//         sid: { type: Number},
//         fullName: { type: String},
//         marks: { type: Number },
//         city: { type: String},
//         pin: { type: Number}
//     },
//    {collection: "student"},
//    { timestamps: true }
// );

 

// // Model

// const Student = mongoose.model("Student", studentSchema);

 

// app.get('/student/:std_id', async (request, response)=>{
//    const std_id = request.params.std_id;
//    console.log(`Fetching the student with id: ${std_id}`);
//    const student = await Student.findOne({sid:std_id});
//    response.status(200).json(student);
// });

// app.post('/student/create', async (request, response)=>{
//    const{sid, fullName, marks, city, pin} = request.body;
//    console.log(`Creating the student with id: ${sid}`);
//    const student = await Student.create({
//     sid, fullName, marks, city, pin
//    });
//    response.status(200).json(student);
// });

// app.delete('/student/:std_id', async (request, response)=>{
//    const std_id = request.params.std_id;
//    console.log(`Deleting the student with id: ${std_id}`);
//    const student = await Student.findOneAndDelete({sid:std_id});
//    if (!student) {
//         return response.status(400).json(`Student not found with id : ${std_id} `);
//    }
//    return response.status(200).json(student);
// });


// app.put('/student/update', async (request, response)=>{
//    const{sid, fullName, marks, city, pin} = request.body;
//    console.log(`Creating the student with id: ${sid}`);
//    const student = await Student.findOneAndUpdate(
//     {sid: sid}, // Find the student by sid
//     { fullName: fullName, marks: marks},
//     { new: true, upsert:true}
// );
//  response.status(200).json(student);
// });







// //-------------------------------------------------------------------------------------------------------------------



// // app.get('/student', async (request, response)=>{
// //     console.log(`======== Endpoint:/student - Fetching all students ========= `);
// //     const allStudents = await Student.find({});
// //     response.status(200).json(allStudents);

// // });

// //--------------------------------------------------------------------------------------


// app.get('/home', (request, response)=>{
//     response.send(`Response from GET method for url /home`);
// });

// app.post('/create', (request, response)=>{
//     response.send(`Response from GET method for url /create`);
// });