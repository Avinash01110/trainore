import connectDb from "../../middleware/mongoose";
import Employee from "../../models/employee";

const handler = async (req, res) => {
  if (req.method === "POST" && req.body.token) {
    try {
      const { _id, newName, newPhone, newAddress, newStartingDate, newEndingDate } = req.body;
      const update = {
        name: newName,
        startingDate: newStartingDate,
        endingDate: newEndingDate,
        address: newAddress,
        phone: newPhone,
      }
      const updatedEmployee = await Employee.findByIdAndUpdate(_id, update);

      if (!updatedEmployee) {
        res.status(404).json({ error: "Employee not found." });
      } else {
        res.status(200).json({ success: "Employee updated successfully."});
      }
    } catch (error) {
      res.status(500).json({ error: "An error occurred while updating the employee." });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};

export default connectDb(handler);
