import express from "express";
import route1 from './routers/gk_route.js';
import route2 from './routers/tv_route.js';
import route3 from './routers/science_route.js';
import route4 from './routers/vehicles_route.js';
import route5 from "./routers/celeb_route.js";
const App=express();
import cors from 'cors';
import Connect_Db from './connect_db.js'

Connect_Db();
App.use(express.json());
App.use(cors());
App.use("/create_Question/10",route1);
App.use("/create_Question/11",route2);
App.use("/create_Question/12",route3);
App.use("/create_Question/13",route4);
App.use("/create_Question/14",route5);

App.listen(1111,()=>console.log(`server is running on port 1111`));