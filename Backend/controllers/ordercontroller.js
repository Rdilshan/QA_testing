const db = require("../config/firebaseConfig");


exports.orderplace = async (req, res) => {
    try {
      const userId = req.user.id;
      const { qty, productId } = req.body;
  
      if (!qty || !productId) {
        return res.status(400).send("Quantity and product ID are required.");
      }
  
      const userRef = db.collection("users").doc(userId);
      const userDoc = await userRef.get();
      
      if (!userDoc.exists) {
        return res.status(404).send("User not found.");
      }
  
      const order = {
        userId,
        qty,
        productId,
        createdAt: new Date().toISOString() 
      };
  
      const docRef = await db.collection("order").add(order);
      res.status(200).send(`Order placed successfully with ID: ${docRef.id}`);
    } catch (error) {
      console.error("Error placing order:", error);
      res.status(500).send(`Error placing order: ${error.message}`);
    }
  };
  