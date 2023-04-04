import mongoose from "mongoose";
const que_schema=mongoose.Schema({
    question:{
     type:String,
     required:true,
     unique:true
    },
    options:[{option:String,istrue:Boolean}]
 })

const gk = new mongoose.model("GeneralKnowledge",que_schema);
const tv=new mongoose.model("Television",que_schema);
const science=new mongoose.model("Science",que_schema);
const vehicles=new mongoose.model("Vehicles",que_schema);
const celeb=new mongoose.model("Celeb",que_schema);


export {gk,tv,science,vehicles,celeb};
