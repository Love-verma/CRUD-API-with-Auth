const express = require('express');

const{
    createDataItem,
    getDataItem,
    updateItem,
    getDataItems,
    deleteDataItem
} = require('../controllers/dataController');

const { protect } = require('../middleware/authMiddleware');
const { route } = require('./authRoutes');
const router = express.Router();

router.post('/', protect, createDataItem);
router.get('/', protect, getDataItems);
router.get('/:id', protect, getDataItem);
router.put('/:id', protect, updateItem);
router.delete('/:id', protect, deleteDataItem);

module.exports = router;