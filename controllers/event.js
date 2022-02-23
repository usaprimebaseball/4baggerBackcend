import Event from "../models/events.js";
import mongoose from 'mongoose';

export const createEvent = async (req, res) => {
    const event = req.body;
    const newEvent = new Event({ ...event, teamsCount: 0, createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') })

    try {
        await newEvent.save();

        res.status(201).json(newEvent);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const getEvents = async (req, res) => { 
    try {
        const events = await Event.find();
                
        res.status(200).json(events);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getEvent = async (req, res) => { 
    const { id } = req.params;

    try {
        const event = await Event.findById(id);
        
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const updateEvent = async (req, res) => {

    const { id: _id } = req.params;
    const info = req.body;
    console.log(info);
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('Not valid event');

    const updatedEvent = await Event.findByIdAndUpdate(_id, info, { new: true });

    res.status(200).json({ result: updatedEvent });

};