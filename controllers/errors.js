import Error from "../models/errors.js";

export const createError = async (req, res) => {
    const error = req.body;
    const newError = new Error({ ...error, createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '') })

    try {
        await newError.save();

        res.status(201).json(newError);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
