const stringDB = "mongodb://localhost:27017/TaskMgmt";

const mongoose = require('mongoose');
const connectDB = (url) => {
return mongoose.connect(url)

}
module.exports = connectDB;