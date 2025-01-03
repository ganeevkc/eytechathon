import User from "../models/user-model.js";

export const registerUser = async (req, res) =>{
    try {
        const {name, contactNo, email, password} = req.body;
        const existingUser = await User.findOne({contactNo});
        if (existingUser) return res.status(400).json({message: "User already exists. Kindly log in."});
        const user = new User({name, contactNo, email, password});
        await user.save();
        res.status(201).json({message: "User registered successfully."});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

export const loginUser = async (req, res) => {
    try {
        const {contactNo, password} = req.body;
        const user = await User.findOne({contactNo});
        if (!user) return res.status(404).json({message: "User not found."});
        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(401).json({message: "Invalid password."});
        res.status(200).json({message: "Login successful!"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};