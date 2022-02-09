import Success from "../models/success.js";

export const createSuccess = async (req, res) => {
    const success = req.body;
    const newSuccess = new Success({ ...success, createdAt: new Date().toISOString() })

    try {
        await newSuccess.save();

        res.status(201).json(newSuccess);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};


