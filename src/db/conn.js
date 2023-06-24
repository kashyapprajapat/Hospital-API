const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect(process.env.mongodb_url, {
     useUnifiedTopology: true,
   useNewUrlParser: true,
   //useCreateIndex:true,
  // useFindAndModify:false
  })
  .then(() => {
    console.log("MongoDD connected succesfully..");
  })
  .catch((error) => console.log(error));
