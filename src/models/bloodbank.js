const mongoose  = require("mongoose");

const bloodbankSchema = new mongoose.Schema({
    firstname:{
        type:String,
        unique:true,
        require:true,
    },
    bloodgroup:{
        type:String,
        unique:true,
        require:true,
    },
    mobilenumber:{
        type:Number,
        unique:true,
        require:true,
    },
    adharnumber:{
        type:String,
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

const doneter = new mongoose.model("bloodbank",bloodbankSchema);
module.exports = doneter;