import User from "../models/Users.js";
import express from "express";

const router = express.Router();

// Create a new user
router.post('/user', async (req, res) => {
    try{
        const user = new User(req.body)
        await user.save();
        res.json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Get all users
router.get('/users', async (req, res) => {
    try{
        const user = await User.find();
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Get a user by id
router.get('/user/:id', async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            res.status(404).json({message: 'User not found!'});
        }
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Update user by id
router.put('/user/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!user){
            res.status(404).json({message: 'User not found!!'});
        }
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Delete a user by id
router.delete('/user/:id', async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(404).json({message: 'User not found!!!'});
        }
        res.send(`Goodbye ${user.name}, You are eleminated.`);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

export default router;