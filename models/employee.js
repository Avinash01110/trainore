const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true},
    startingDate: { type: Date, required: true},
    endingDate: { type: Date, required: true},
    address: {type:String,default:""},
    phone: {type:String,default:"", required: true, unique:true}
  },
  { timestamps: true }
);

mongoose.models={}
export default mongoose.model("employee", employeeSchema);