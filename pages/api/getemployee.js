import connectDb from "../../middleware/mongoose";
import Employee from "../../models/employee";

const handler = async (req, res) => {
  if (req.method === "POST" && req.body.token) {
    try {
      const employees = await Employee.find({});
      res.status(200).json({ success: true, employees });
    } catch (error) {
      res.status(500).json({ error: true, message: "Error fetching employee details" });
    }
  } else {
    res.status(400).json({ error: true, message: "Invalid request method" });
  }
};

export default connectDb(handler);
