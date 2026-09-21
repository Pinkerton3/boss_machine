const express = require('express');
const app = express();

module.exports = app;

// Add middleware for handling CORS requests from index.html
const cors = require('cors');
app.use(cors);

// Add middware for parsing request bodies here:
const bodyParser = require('body-parser');
app.use(bodyParser);

// Mount your existing apiRouter below at the '/api' path.
const apiRouter = require('./server/api');

// GET all minions
app.get('/api/minions', (req, res, next) => {
    res.send('/minions');
})

// POST new minion and save to database
app.post('/api/minions', (req, res, next) => {
  res.status(400).send();
})

// GET single minion by id
app.get('/api/minions/:minionId', (req, res, next) => {
  res.send('/minionId');
})

// PUT single minion by id
app.put('/api/minions/:minionId', (req, res, next) => {
  res.status(400).send();
})

// DELETE single minion by id
app.delete('api/minions/:minionId', (req, res, next) => {
  res.status(400).send();
})
