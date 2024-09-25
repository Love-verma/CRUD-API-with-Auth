const { json } = require('express');
const DataItem = require('../models/DataItem');

//create new data item
exports.createDataItem = async (req, res) => {
    const {name, description} = req.body;

    try {
        const dataItem = new DataItem({ name, description, createdBy: req.user.userId});
        await dataItem.save();
        res.status(201).json(dataItem);        
    } catch (error) {
        res.status(400).json({ error: 'Error in creating data item'});
        
    }
};

//get all items paging and sorting
exports.getDataItems = async (req, res) => {
    const {page = 1, limit = 10, sort = 'createdAt' } = req.query;

    try {
        const dataItems = await DataItem.find().sort({ [sort]: -1 }).limit(limit*1).skip((page - 1) * limit).exec();
        const count = await DataItem.countDocuments();
        res.json({
            dataItems, 
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(400).json({ error: 'Error fetching data items' });
    }
};

//get single data item
exports.getDataItem = async (req, res) => {
    try {
        const dataItem = await DataItem.findById(req.params.id);
        if(!dataItem) return res.status(404).json({ error: 'Data item not found'});
        res.json(dataItem);
    } catch (error) {
        res.status(400),json({ error: 'Error in fetching data item'});
    }
};

//update
exports.updateItem = async (req, res) => {

    try {
        const dataItem = await DataItem.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!dataItem) return res.status(404).json({ error: 'Data item not found'});
        res.json(dataItem);
    } catch (error) {
        console.log(error);
        
        res.status(400).json({ error: "Error updating data item" });
    }
};

//Delete data item
exports.deleteDataItem = async (req, res) => {
    try {
        const dataItem = await DataItem.findByIdAndDelete(req.params.id);
        if(!dataItem) return res.status(404).json({ error: "Data item not found"});
        res.json({ message: "Data item deleted" });
        l
    } catch (error) {
        res.status(400).json({error: "Error deleting data item"});
    }
};
