import express from "express";
import {getgkquestions,creategkquestion} from '../controllers/question_controller.js'
const router=express.Router();

router.post("/",creategkquestion);
router.get("/",getgkquestions);


export default router;