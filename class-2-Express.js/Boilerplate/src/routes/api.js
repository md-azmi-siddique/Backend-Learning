const express = require("express");
const StudentController = require("../controllers/studentController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = express.Router()

// Use Structure of path specific middleware
router.get("/read",AuthMiddleware, StudentController.ReadStudent);

router.post("/create", StudentController.CreateStudent);

//Use Structure of middleware
router.put("/update",AuthMiddleware, StudentController.UpdateStudent);

router.delete("/delete", StudentController.DeleteStudent);

router.post("/UploadStudentPhoto", StudentController.UploadStudentPhoto);


module.exports=router;



