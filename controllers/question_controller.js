import {gk,tv,celeb,science,vehicles} from '../models/questions.js'

async function creategkquestion(req,res){
    try {
        let data=await gk.create(req.body);
        res.end(); 
    } catch (error) {
        res.send("error:",error.message);
    }
}
async function getgkquestions(req,res){
    try {
        let data =await gk.find();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}


async function createtvquestion(req,res){
    try {
        let data=await tv.create(req.body);
        res.end(); 
    } catch (error) {
        res.send("error:",error.message);
    }
}
async function gettvquestions(req,res){
    try {
        let data =await tv.find();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}



async function createsciencequestion(req,res){
    try {
        let data=await science.create(req.body);
        res.end(); 
    } catch (error) {
        res.send("error:",error.message);
    }
}
async function getsciencequestions(req,res){
    try {
        let data =await science.find();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}


async function createvehiclesquestion(req,res){
    try {
        let data=await vehicles.create(req.body);
        res.end(); 
    } catch (error) {
        res.send("error:",error.message);
    }
}
async function getvehiclesquestions(req,res){
    try {
        let data =await vehicles.find();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}

async function createcelebquestion(req,res){
    try {
        let data=await celeb.create(req.body);
        res.end(); 
    } catch (error) {
        res.send("error:",error.message);
    }
}
async function getcelebquestions(req,res){
    try {
        let data =await celeb.find();
        res.send(data);
    } catch (error) {
        res.send(error.message);
    }
}
export {getgkquestions,creategkquestion,createtvquestion,gettvquestions,createsciencequestion,getsciencequestions,createvehiclesquestion,getvehiclesquestions,createcelebquestion,getcelebquestions};