// const mongoose = require('mongoose');
// const mongoURL = "mongodb://localhost:27017"
// const connectToMongo = ()=>{
//     mongoose.connect(mongoURL, ()=>{
//         console.log("connect to mongoose done")
//     })
// }

// module.exports = connectToMongo

const mongoose = require('mongoose');
const mongoURL = "mongodb://0.0.0.0:27017/"

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
