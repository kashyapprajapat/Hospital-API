const express = require("express");
const bodyparser = require("body-parser");


const PORT = process.env.port || 8080;
require("dotenv").config();

const app = express();

require("./db/conn");

const cors = require("cors");
app.use(cors());

const appointmenter = require("./models/appointment");
const doneter = require("./models/bloodbank");

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json())



app.get("/", (req, res) => {
  res.send("Backend is completely Working 🎉");
});

//Below Code For All Appointmet details
app.get("/api/appointmentdetails", async(req, res) => {
    try{
        const appointment  = new appointmenter(req.body);
        const appointmentdata = await appointmenter.find();
        console.log(appointmentdata);
        res.send(appointmentdata);
    }  
      catch{
         console.error(Error);
         res.status(500).render("Serever Error!")
      }
});

//Below Code For All bloodDonation details
app.get("/api/donaterdeatails", async(req, res) => {
    try{
        const blooddonter  = new doneter(req.body);
        const doneterdata = await doneter.find();
        console.log(doneterdata);
        res.send(doneterdata);
    }  
      catch{
         console.error(Error);
         res.status(500).render("Serever Error!")
      }
});

//Below code is For Add Appointment Details.
app.post("/api/appointment", async(req, res) => {
         try{
            const ap1 = new appointmenter(req.body);
            console.log(req.body);
            const appintmentsave = await ap1.save();
            res.status(201).send("Your Appointment Details Saved Sucessfully.🎉")
         }
         catch{
            res.status(500).send("<h1>Server Error!.</h1>")
         }
});

//Below code is For Add BloodDonation Details.
app.post("/api/donate", async(req, res) => {
    try{
        const do1 = new doneter(req.body);
        console.log(req.body);
        const dontersave = await do1.save();
        res.status(201).send("Your Blood-Donation  Details Saved Sucessfully.🎉")
     }
     catch{
        res.status(500).send("<h1>Server Error!.</h1>")
     }
});

//Below Code for Inavlid request/url.
app.get("*", (req, res) => {
  res.send("<h1>Server Error!</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is SuccessFully Running at Port No:${PORT}`);
});
