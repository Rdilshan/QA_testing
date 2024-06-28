const db = require("../config/firebaseConfig");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


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


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userRef = db.collection("users");
    const snapshot = await userRef.where("email", "==", email).get();
    if (snapshot.empty) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    let user = null;
    snapshot.forEach((doc) => {
      user = doc.data();
      user.id = doc.id;
    });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}