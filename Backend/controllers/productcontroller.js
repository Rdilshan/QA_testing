const db = require("../config/firebaseConfig");

exports.saveNewData = async (req, res) => {
  const { title, price,shortDescription,quantity,productType,description } = req.body;
  const images = req.files.map((file) => file.path);

  console.log("Received form data:", { title, price,shortDescription,quantity,productType,description, images });

  // Here you can handle the data, e.g., save it to a database.
  res.json({
    message: "Form data received successfully",
    data: { title, price,shortDescription,quantity,productType,description, images },
  });
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
