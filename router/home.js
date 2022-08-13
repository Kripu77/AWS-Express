const express = require("express");
const homeRouter = express.Router();
const {handleHome, handleHomeClient} = require("../controllers/handleHome");


//home route

homeRouter.get("", handleHome)


//home client route

homeRouter.get("/client", handleHomeClient);



module.exports={
    homeRouter
}