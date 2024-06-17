const db = require('../config/firebaseConfig');

exports.create = async (req, res) => {
    try {
        const docRef = await db.collection('users').add(req.body);
        res.status(200).send(`Document written with ID: ${docRef.id}`);
      } catch (error) {
        res.status(500).send(`Error adding document: ${error}`);
      }
};
