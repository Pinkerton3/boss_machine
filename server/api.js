const express = require('express');
const { getAllFromDatabase, addToDatabase, getFromDatabaseById } = require('./db');
const apiRouter = express.Router();
const allMinions = getAllFromDatabase('minions');
//console.log(allMinions);



module.exports = apiRouter;

// GET all minions
apiRouter.get('/minions', (req, res, next) => {
    res.send(allMinions);
});

// POST new minion and save to database
apiRouter.post('/minions', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body);
  if(newMinion) {
    allMinions.push(newMinion);
    res.status(201).send(newMinion);
  } else {
    res.status(400).send();
  }
})

// GET single minion by id
apiRouter.get('/minions/:minionId', (req, res, next) => {
  const minionId = getFromDatabaseById('minions', req.params.minionId);
  if (minionId) {
    res.send(minionId);
  } else {
    res.status(404).send();
  }
});

// PUT single minion by id
apiRouter.put('/minions/:minionId', (req, res, next) => {
  res.status(400).send();
})

// DELETE single minion by id
apiRouter.delete('/minions/:minionId', (req, res, next) => {
  res.status(400).send();
})
