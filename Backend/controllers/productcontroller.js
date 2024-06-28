const db = require("../config/firebaseConfig");

exports.saveNewData = async (req, res) => {
  const { title, price, shortDescription, quantity, productType, description } = req.body;
  const images = req.files.map((file) => file.path);
  
  console.log("Received form data:", { title, price, shortDescription, quantity, productType, description, images });
  
  try {
    const productData = {
      title,
      price,
      shortDescription,
      quantity,
      productType,
      description,
      images
    };
  
    const docRef = await db.collection('product').add(productData);
    res.status(200).send(`Document written with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send(`Error adding document: ${error}`);
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


exports.getAllproducts = async (req, res) => {
  try {
    const snapshot = await db.collection("product").get();
    const productset = [];

    snapshot.forEach((doc) => {
      productset.push({ id: doc.id, ...doc.data() });
    });

    res.status(200).json(productset);
  } catch (error) {
    res.status(500).send(`Error retrieving documents: ${error}`);
  }
};

exports.getoneproduct = async (req, res) => {
  try {
    const doc = await db.collection("product").doc(req.params.id).get();
    if (!doc.exists) {
      res.status(404).send("Product not found");
    } else {
      res.status(200).json(doc.data());
    }
  } catch (error) {
    res.status(500).send(`Error retrieving document: ${error}`);
  }
}