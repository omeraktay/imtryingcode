import express from "express";
import User from "../models/Users.js";

const router = express.Router();

// Create a new user
router.post('/user', async(req, res) => {
    try{
        const user = new User(req.body);
        await user.save();
        res.json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Get all users
router.get('/users', async(req, res) => {
    try{
        const users = await User.find()
        res.status(201).json(users)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Get a user by id
router.get('/user/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id);
        if(!user){
            return res.status(404).json({message: 'User not found!'});
        }
        res.status(201).json(user);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Update a user by id
router.put('/user/:id', async(req, res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!user){
            return res.status(404).json({message: 'User not found!!'});
        }
        res.send(user)
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

// Delete user by id
router.delete('/user/:id', async(req, res) => {
    try{    
        const user = await User.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({message: 'User not found!!!'});
        }
        res.send(`Goodbye ${user.name}. Your profile has beed deleted successfully.`);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

export default router;