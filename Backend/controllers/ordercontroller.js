const db = require("../config/firebaseConfig");


exports.orderplace = async (req, res) => {
  try {
    const userId = req.user.id;
    const {qty,productId} = req.body
    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      return res.status(404).send("User not found");
    }
    const user = userDoc.data();
    const order = {
      userId,
      qty,
      productId
    };
    const docRef = await db.collection("order").add(order);
    res.status(200).send(`Document written with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send(`Error adding document: ${error}`);
  }
};