import express from "express";
import {createvehiclesquestion,getvehiclesquestions} from '../controllers/question_controller.js';
const router=express.Router();

router.post("/",createvehiclesquestion);
router.get("/",getvehiclesquestions);

export default router;