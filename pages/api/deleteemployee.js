import connectDb from "../../middleware/mongoose";
import Employee from "../../models/employee";

const handler = async (req, res) => {
  if (req.method == "DELETE" && req.body.token) {
    try {
      const { _id } = req.body;
      const deletedEmployee = await Employee.findByIdAndDelete(_id);

      if (!deletedEmployee) {
        res.status(404).json({ error: "Employee not found." });
      } else {
        res.status(200).json({ success: "Employee deleted successfully." });
      }
    } catch (error) {
      res.status(500).json({ error: "An error occurred while deleting the employee." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default connectDb(handler);
