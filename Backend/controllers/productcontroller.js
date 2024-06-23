const db = require("../config/firebaseConfig");

exports.saveNewData = async (req, res) => {
  try {
    const data = req.body;
    const imageFile = req.file;

    if (!data) {
      return res.status(400).json({ error: "No data provided" });
    }


    res.status(200).json({ data, imageFile });
  } catch (error) {
    console.error("Error saving new data:", error);
    res.status(500).json({ error: "Failed to save new data" });
  }
};
exports.getAllOrders = async (req, res) => {
  try {
    const snapshot = await db.collection("order").get();
    const orders = [];

    snapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).send(`Error retrieving documents: ${error}`);
  }
};
