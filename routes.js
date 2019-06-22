const express = require('express');
const app = express();

//Import our page routes
const pageRoutes = require('./routes/pages');
const teamsRoutes = require('./routes/teams');

//Register our page routes
app.use('/', pageRoutes);
app.use('/teams', teamsRoutes);

//Export the changes
module.exports = app;