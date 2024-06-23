const db = require('../config/firebaseConfig');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const adminRef = db.collection('admin');
        
        const snapshot = await adminRef.where('email', '==', email).get();
        
        if (snapshot.empty) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        
        let user = null;
        snapshot.forEach(doc => {
            user = doc.data();
            user.id = doc.id;  
        });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;

        const adminRef = db.collection('admin');
        const snapshot = await adminRef.where('email', '==', email).get();
        
        if (!snapshot.empty) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            email: email,
            password: hashedPassword,
        };

        const docRef = await adminRef.add(newUser);
        
        res.status(200).send(`Document written with ID: ${docRef.id}`);
    } catch (error) {
        console.error('Error during register:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};