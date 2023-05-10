import express from "express";
import dotenv from "dotenv";


//Database connection 
import ConnectDB from "./Database/connection";

dotenv.config();
const zomato = express()

zomato.use(express.json());
zomato.get("/", (req,res)=>{
    res.json({message : "server is running successfully..",
    });
});
const PORT = 4000;
zomato.listen(PORT,()=>{
//     ConnectDB()
//     .then(()=>{console.log ("server is running but DB connection failed");
//         console.log(error);

// });
console.log("server is running !!");
});