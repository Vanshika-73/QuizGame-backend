import express from "express";
import {createtvquestion,gettvquestions} from '../controllers/question_controller.js'
const router=express.Router();


router.post("/",createtvquestion);
router.get("/",gettvquestions);

export default router;
