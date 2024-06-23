const db = require('../config/firebaseConfig');

exports.getAllOrders = async (req, res) => {
    try {
        const snapshot = await db.collection('order').get();
        const orders = [];

        snapshot.forEach(doc => {
            orders.push({ id: doc.id, ...doc.data() });
        });

        res.status(200).json(orders);
    } catch (error) {
        res.status(500).send(`Error retrieving documents: ${error}`);
    }
};