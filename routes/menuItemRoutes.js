const express = require('express');
const router = express.Router();
const MenuItem = require('../models/menuItem');
    // post route to add a menu item
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const response = await newMenuItem.save();
        console.log('Menu item saved successfully');
        res.status(200).json(response);
    } catch (err) {
        console.error('Error saving menu item:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});
// Get route to fetch all menu items
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('Menu items fetched successfully');
        res.status(200).json(data);
    } catch (err) {
        console.error('Error fetching menu items:', err);
        res.status(500).send({ error: 'Internal server error' });
    }
});
// connect added for testing purpose
module.exports = router;