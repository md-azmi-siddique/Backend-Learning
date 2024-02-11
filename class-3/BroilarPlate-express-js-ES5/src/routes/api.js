const express = require("express");
const WelcomeController = require("../controllers/WelcomeController");

const router = express.Router();

router.get("/", WelcomeController.welcome)
router.get("/welcome1", WelcomeController.welcome1)
router.get("/welcome2", WelcomeController.welcome2)

module.exports=router;