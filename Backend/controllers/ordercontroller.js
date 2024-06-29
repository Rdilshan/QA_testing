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
      paymentStatus:false,
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
      .where("paymentStatus", "==", false)
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

    const ordersRef = db.collection("order");
    const query = ordersRef.where("userId", "==", userId).where("paymentStatus", "==", false);

    const ordersSnapshot = await query.get();
    const count = ordersSnapshot.size;

    res.status(200).json({ count });
  } catch (error) {
    console.error("Error counting orders:", error);
    res.status(500).send(`Error counting orders: ${error.message}`);
  }
};


exports.orderpaymentdon = async (req, res) => {
  const { f_name, l_name, streetAddress1, streetAddress2, town, state, postcode, phone, ordernote, products } = req.body;


    if (!f_name || !l_name || !streetAddress1 || !town || !postcode || !phone || !products) {
      return res.status(400).json({ error: "Incomplete data. Please provide all required fields." });
    }


    const orderUpdates = {
      firstName: f_name,
      lastName: l_name,
      streetAddress1,
      streetAddress2: streetAddress2 || "", // Optional field
      town,
      state: state || "", // Optional field
      postcode,
      phone,
      ordernote,
      paymentStatus:true,
      orderstate:'pending',
      paymentAT: new Date().toISOString(),
    };

    await Promise.all(products.map(async (productId) => {
     console.log(productId.orderID)
     const orderSnapshot = await db.collection("order").doc(productId.orderID).get();
      if (orderSnapshot.exists) {
        const orderRef = db.collection("order").doc(productId.orderID);
        await orderRef.update(orderUpdates);
      }
    }));


    await Promise.all(products.map(async (productId) => {

      const productRef = db.collection("product").doc(productId.id);
      const productDoc = await productRef.get();
    
      if (productDoc.exists) {
        const currentQuantity = productDoc.data().quantity;
        const newQuantity = currentQuantity - productId.qty;
    
        await productRef.update({ quantity: newQuantity });
    
        console.log(`Updated quantity for product ${productId.id} to ${newQuantity}`);
      } else {
        console.error(`Product document have not`)
      }

      
     }));




    res.status(201).json({ message: orderUpdates });

};

exports.paymentdone=async(req,res)=>{
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
      .where("paymentStatus", "==", true)
      .get();

    const cartList = ordersSnapshot.docs.map((doc) => {
      const data = doc.data();
      return { productId: data.productId, qty: data.qty, orderID: doc.id,orderstate:data.orderstate,paymentAT:data.paymentAT };
    });

    if (cartList.length === 0) {
      return res.status(200).json([]);
    }

    const products = await Promise.all(
      cartList.map(async ({ productId, qty, orderID,orderstate,paymentAT }) => {
        const productRef = db.collection("product").doc(productId);
        const productDoc = await productRef.get();

        if (productDoc.exists) {
          return { id: productId, qty, orderID,orderstate,paymentAT, ...productDoc.data() };
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
}

exports.paymentdoneadmin =async(req,res)=>{
  try {


    const ordersSnapshot = await db
      .collection("order")
      .where("paymentStatus", "==", true)
      .get();

    const cartList = ordersSnapshot.docs.map((doc) => {
      const data = doc.data();
      return { productId: data.productId, qty: data.qty, orderID: doc.id,orderstate:data.orderstate,paymentAT:data.paymentAT };
    });

    if (cartList.length === 0) {
      return res.status(200).json([]);
    }

    const products = await Promise.all(
      cartList.map(async ({ productId, qty, orderID,orderstate,paymentAT }) => {
        const productRef = db.collection("product").doc(productId);
        const productDoc = await productRef.get();

        if (productDoc.exists) {
          return { id: productId, qty, orderID,orderstate,paymentAT, ...productDoc.data() };
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
}