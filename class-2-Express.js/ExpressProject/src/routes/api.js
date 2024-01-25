const express = require("express");
const {CreateStudent, ReadStudent, UpdateStudent, DeleteStudent} = require("../controllers/studentController");

const router = express.Router()

router.get("/read", ReadStudent);

router.post("/create", CreateStudent);

router.put("/update", UpdateStudent);

router.delete("/delete", DeleteStudent);


module.exports=router;