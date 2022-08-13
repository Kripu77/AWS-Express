const {mongoose} = require("mongoose");


//schema  for fetching reminders

const ReminderSchema = new mongoose.Schema({
    header:{
        required:true, 
        type:String
    }, 
    description:{
        required:true,
        type:String
    }
})


const Reminder = mongoose.model("Reminder", ReminderSchema);


module.exports={
    Reminder
}