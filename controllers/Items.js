import { ItemModel } from "../models/ItemModel.js";

export const getItems = async (req, res) => {
    try {
        const item = new ItemModel({
            title: 'test',
            content: 'asdasdasd'
        });
        item.save();
    
        const items = await ItemModel.find();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const createItem = async (req, res) => {
    try {
        const newItem = req.body;

        const item = new ItemModel(newItem);
        await item.save();
        
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

export const updateItem = async (req, res) => {
    try {
        const updateItem = req.body;
        
        const item = await ItemModel.findOneAndUpdate(
            { _id: updateItem._id },
            updateItem,
            { new: true }
        );

        res.status(200).json(item);

    } catch (err) {
        res.status(500).json({ error: err });
    }
};