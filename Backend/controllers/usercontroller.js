const db = require("../config/firebaseConfig");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({ token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginuserdetails = async (req, res) => {
  
  try {
    const userId = req.user.id;
    const doc = await db.collection("users").doc(userId).get();
    if (!doc.exists) {
      res.status(404).send("users not found");
    } else {
      res.status(200).json(doc.data());
    }
  } catch (error) {
    res.status(500).send(`Error retrieving document: ${error}`);
  }

};


exports.updateuser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email, currentPwd, newPwd } = req.body;

    const userRef = db.collection("users").doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return res.status(404).send('User not found');
    }

    const user = userDoc.data();

    const isMatch = await bcrypt.compare(currentPwd, user.password);
    if (!isMatch) {
      return res.status(401).send('Current password is incorrect');
    }

    const updatedUser = { name, email };


    if (newPwd) {
      const hashedPassword = await bcrypt.hash(newPwd, 10);
      updatedUser.password = hashedPassword;
    }

    await userRef.set(updatedUser, { merge: true });

    res.status(200).send('Profile updated successfully');
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).send(`Error updating document: ${error.message}`);
  }
};