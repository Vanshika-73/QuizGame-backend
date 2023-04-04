import express from "express";
import {createcelebquestion,getcelebquestions} from '../controllers/question_controller.js'
const router=express.Router();


router.post("/",createcelebquestion);
router.get("/",getcelebquestions);
export default router;