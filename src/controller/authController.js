const userModel = require('../models/userModel');

//fitur singup
exports.signup = async (req, res) => {
    const { username, password } = req.body;

    // Cek apakah username sudah digunakan
    if (userModel.findUserByUsername(username)) {
        return res.status(400).json({ message: "Username already taken" });
    }

    // Simpan user dengan password dalam bentuk plaintext
    userModel.addUser({ username, password });

    res.status(201).json({ message: "Signup successful" });
};

//fitur login
exports.login = async (req, res) => {
    const { username, password } = req.body;
    const user = userModel.findUserByUsername(username);

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }

    // Cek kecocokan password (plaintext)
    if (user.password !== password) {
        return res.status(401).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful" });
};
