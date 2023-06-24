const mongoose  = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    firstname:{
        type:String,
        unique:true,
        require:true,
    },
    lastname:{
        type:String,
        unique:true,
        require:true,
    },
    mobilenumber:{
        type:Number,
        unique:true,
        require:true,
    },
    age:{
        type:Number,
        unique:true,
        require:true,
    },
    date:{
        type:String,
        unique:true,
        require:true,
    },
    time:{
        type:String,
        unique:true,
        require:true,
    }
});

const appointmenter = new mongoose.model("appointment",appointmentSchema);
module.exports = appointmenter;