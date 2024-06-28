const db = require("../config/firebaseConfig");
const bcrypt = require('bcrypt');


exports.create = async (req, res) => {
  try {
    const docRef = await db.collection("users").add(req.body);
    res.status(200).send(`Document written with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send(`Error adding document: ${error}`);
  }
};

exports.registation = async (req, res) => {
  try {
    const { name, email, password, repeatpwd } = req.body;
    // Check if passwords match
    if (password !== repeatpwd) {
      return res.status(400).send("Passwords do not match");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = {
      name,
      email,
      password: hashedPassword,
    };
    const docRef = await db.collection("users").add(user);
    res.status(200).send(`Document written with ID: ${docRef.id}`);
  } catch (error) {
    res.status(500).send(`Error adding document: ${error}`);
  }
};


