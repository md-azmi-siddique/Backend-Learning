const express = require("express");
const router = express.Router();

const WelcomeController = require("../controllers/WelcomeController");
const HelloController = require("../controllers/HelloController");


router.get("/", WelcomeController.welcome)
router.get("/welcome1", WelcomeController.welcome1)
router.get("/welcome2", WelcomeController.welcome2)

//from record
router.get("/hello1-get", HelloController.Hello1)
// router.get("/", HelloController.Hello1)
router.post("/hello1-post", HelloController.Hello1)

module.exports=router;