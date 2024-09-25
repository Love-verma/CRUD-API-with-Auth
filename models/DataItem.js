const mongoose = require('mongoose');

const dataItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    },
    { timestamps: true } 
);

const DataItem = mongoose.model('DataItem', dataItemSchema);
module.exports = DataItem;
