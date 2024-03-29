const express = require('express')
// const multer  = require('multer')
// const {resolve, join} = require("path");
const fileForge = require('express-fileforge');
const path = require('path');
// const path = require('path');
//
// const  storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,path.resolve(__dirname,'..','files'))
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.originalname)
//     }
// })
//
// const upload = multer({storage:storage})
//
// //Upload Student Photo
// exports.UploadStudentPhoto=async (req,res)=>{
//     const moveFile = upload.single('myImg');
//     await new Promise(
//         (resolve, reject)=>{
//             moveFile(req,{},(err)=>{
//                 if(err){
//                     reject(err)
//                 }
//                 else {
//                     resolve()
//                 }
//             })
//         }
//     )
//     return res.end("File Upload Successful")
// }

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         // cb(null, '.../files'); // Specify the destination folder
//         cb(null,resolve(__dirname,'..','files'))
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname); // Retain original filename
//     }
// });

// const upload = multer({storage:storage}).single("myFile")

//Upload Student Photo
// exports.UploadStudentPhoto= (req,res)=>{
//     upload(req,res,(err)=>{
//         if(err){
//             res.send("Upload Failed")
//         }
//         else {
//             res.send("File Upload Successful")
//         }
//     })
// }

// Your route for file upload
exports.UploadStudentPhoto = async (req,res)=>{
    try {
   
        // Set up file storage directory
        const fileStoragePath = path.resolve(__dirname, 'files');
        // Save the uploaded file
        let uploadedFile = await fileForge.saveFile(req, fileStoragePath, 'myFile');
        
        res.end(`File uploaded successfully: ${uploadedFile}`);
      } catch (error) {
        console.error(error);
        res.status(500).end('Internal Server Error');
      }
    }

//Create Student
exports.CreateStudent=(req,res)=>{
    res.end("Create")
}

//Delete Student
exports.DeleteStudent=(req,res)=>{
    res.end("delete")
}

//Update Student
exports.UpdateStudent=(req,res)=>{
    res.end("update")
}

//Read Student
exports.ReadStudent=(req,res)=>{
    res.end("Read")
}

// exports.Home = (req, res) => {
//     res.sendFile(join(__dirname, '../view/index.html'));
// };