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
      createdAt: new Date().toISOString(),
    };

    const docRef = await db.collection("order").add(order);
    res.status(200).send(`Order placed successfully with ID: ${docRef.id}`);
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).send(`Error placing order: ${error.message}`);
  }
};

exports.addtocartlistget = async (req, res) => {
  try {
    const userId = req.user.id;
    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).send("User not found.");
    }

    const ordersSnapshot = await db
      .collection("order")
      .where("userId", "==", userId)
      .get();

    const cartList = ordersSnapshot.docs.map((doc) => {
      const data = doc.data();
      return { productId: data.productId, qty: data.qty, orderID: doc.id };
    });

    if (cartList.length === 0) {
      return res.status(200).json([]);
    }

    const products = await Promise.all(
      cartList.map(async ({ productId, qty, orderID }) => {
        const productRef = db.collection("product").doc(productId);
        const productDoc = await productRef.get();

        if (productDoc.exists) {
          return { id: productId, qty, orderID, ...productDoc.data() };
        } else {
          return null;
        }
      })
    );

    const filteredProducts = products.filter(Boolean);
    res.status(200).json(filteredProducts);
  } catch (error) {
    console.error("Error retrieving cart list:", error);
    res.status(500).send(`Error retrieving cart list: ${error.message}`);
  }
};

exports.updateCartQty = async (req, res) => {
  try {
    const userId = req.user.id;
    const { orderId, qty } = req.body;

    if (!orderId || !qty) {
      return res.status(400).send("Order ID and quantity are required.");
    }

    const orderRef = db.collection("order").doc(orderId);
    const orderDoc = await orderRef.get();

    if (!orderDoc.exists) {
      return res.status(404).send("Order not found.");
    }

    await orderRef.update({ qty });

    res
      .status(200)
      .send(`Order quantity updated successfully for order ID: ${orderId}`);
  } catch (error) {
    console.error("Error updating order quantity:", error);
    res.status(500).send(`Error updating order quantity: ${error.message}`);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const userId = req.user.id;
    const { orderId } = req.body;

    if (!orderId) {
      return res.status(400).send("Order ID is required.");
    }

    const orderRef = db.collection("order").doc(orderId);
    const orderDoc = await orderRef.get();

    if (!orderDoc.exists) {
      return res.status(404).send("Order not found.");
    }

    if (orderDoc.data().userId !== userId) {
      return res
        .status(403)
        .send("You do not have permission to delete this order.");
    }

    await orderRef.delete();

    res.status(200).send(`Order deleted successfully with ID: ${orderId}`);
  } catch (error) {
    console.error("Error deleting order:", error);
    res.status(500).send(`Error deleting order: ${error.message}`);
  }
};

exports.countorder = async (req, res) => {
  try {
    const userId = req.user.id;
    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();
    if (!userDoc.exists) {
      return res.status(404).send("User not found.");
    }
    const ordersSnapshot = await db
      .collection("order")
      .where("userId", "==", userId)
      .get();
    const count = ordersSnapshot.size;
    res.status(200).json({ count });
  } catch (error) {
    console.error("Error counting orders:", error);
    res.status(500).send(`Error counting orders: ${error.message}`);
  }
};
