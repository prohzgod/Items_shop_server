import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        attachment: String,
    }, 
    { timestamps: true }
);

export const ItemModel = mongoose.model('Item', schema);