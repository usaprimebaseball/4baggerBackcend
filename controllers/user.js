import mongoose from 'mongoose';
import { Director, Player, Team, Other, Admin } from "../models/users.js";

export const getUsers = async (req, res) => { 
    try {
        const users = await Director.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await Director.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateDirector = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');

    const updatedDirector = await Director.findByIdAndUpdate(_id, info, { new: true });


    res.status(200).json({ result: updatedDirector });

};

export const updatePlayer = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedPlayer = await Player.findByIdAndUpdate(_id, info, { new: true });


    res.status(200).json({ result: updatedPlayer });
};

export const updateTeam = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedTeam = await Team.findByIdAndUpdate(_id, info, { new: true });

    res.status(200).json({ result: updatedTeam });
};

export const updateOther = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedOther = await Other.findByIdAndUpdate(_id, info, { new: true });

    res.status(200).json({ result: updatedOther });
};

export const updateAdmin = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedOther = await Admin.findByIdAndUpdate(_id, info, { new: true });

    res.status(200).json({ result: updatedOther });
};

export const updateActivity = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedUser = await Director.findByIdAndUpdate(_id, info, { new: true });

    res.status(200).json({ result: updatedUser });
};