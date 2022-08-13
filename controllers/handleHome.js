const { Reminder } = require("../models/Reminder");

const handleHome=(req, res)=>{

    res.status(200).send({success:true,data:"Home Route"})
}

const handleHomeClient = async (req, res) => {

    try{
      let reminder=   await Reminder.find({});
     
       res.status(200).send({ success: true, data: reminder });
    }
 catch(err){
    console.log(err);
 }
};


module.exports = {
  handleHome,
  handleHomeClient,
};