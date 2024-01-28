const express = require("express");
const StudentController = require("../controllers/studentController");
const AuthMiddleware = require("../middleware/AuthMiddleware");

const router = express.Router()

router.get("/read",AuthMiddleware, StudentController.ReadStudent);

router.post("/create", StudentController.CreateStudent);

router.put("/update",AuthMiddleware, StudentController.UpdateStudent);

router.delete("/delete", StudentController.DeleteStudent);


module.exports=router;



