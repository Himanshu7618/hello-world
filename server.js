const express = require('express');
const app = express();
const db = require('./db'); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const MenuItem = require('./models/menuItem');
app.get('/', function (req, res) {
    res.send('Welcome to my hotel')
});

// Import the router files
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
// Use the routers
app.use('/menu', menuItemRoutes);
app.use('/person', personRoutes);
app.listen(6000, () => {
    console.log('server is running on port 6000');
 });