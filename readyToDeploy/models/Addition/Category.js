// 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "myUser"
      },
   categoryName:{
       type:String,
       required:true
   },
   link:{
       type:String,
       required:true
   },
   logo:{
       type:String,
       required:true
   },
   description:{
       type:String,
       default:""
   },
   image:{
       type:String,
       default:""
   },
   date: {
    type: Date,
    default: Date.now
  },
   creationDate: {
    type: Date,
    required:true
  },

});

module.exports = Category = mongoose.model("myCategory", CategorySchema);


// /category