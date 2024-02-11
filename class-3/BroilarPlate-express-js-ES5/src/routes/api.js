import express from "express";
import * as WelcomeController from "../controllers/WelcomeController.js";
import {welcome, welcome1, welcome2} from "../controllers/WelcomeController.js";

const router = express.Router();

router.get("/", welcome)
router.get("/welcome1", welcome1)
router.get("/welcome2", welcome2)

export default router