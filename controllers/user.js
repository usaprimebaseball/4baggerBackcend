import mongoose from 'mongoose';

import { Director, Player, Team, Other } from "../models/users.js";

export const updateDirector = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');

    const updatedDirector = await Director.findByIdAndUpdate(_id, info, { new: true });

    res.json(updatedDirector);

}

export const updatePlayer = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedPlayer = await Player.findByIdAndUpdate(_id, info, { new: true });

    res.json(updatedPlayer);

}

export const updateTeam = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedTeam = await Team.findByIdAndUpdate(_id, info, { new: true });

    res.json(updatedTeam);

}

export const updateOther = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid user');
    
    const updatedOther = await Other.findByIdAndUpdate(_id, info, { new: true });

    res.json(updatedOther);

}