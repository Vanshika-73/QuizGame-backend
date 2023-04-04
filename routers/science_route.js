import express from "express";
import {createsciencequestion,getsciencequestions} from '../controllers/question_controller.js'
const router=express.Router();

router.post("/",createsciencequestion);
router.get("/",getsciencequestions);

export default router;