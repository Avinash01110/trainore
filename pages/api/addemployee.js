import connectDb from "../../middleware/mongoose";
import Employee from "../../models/employee";

const handler = async (req, res) => {
  if (req.method == "POST") {
      let e = new Employee({
        name: req.body.name,
        startingDate: req.body.startingDate,
        endingDate: req.body.endingDate,
        address: req.body.address,
        phone: req.body.phone
      });
      await e.save();
    res.status(200).json({success:true, success: "Employee has been added to database" });
  } else {
    res.status(400).json({error:true, error: "Some error occured while adding the Employee details" });
  }
};

export default connectDb(handler);