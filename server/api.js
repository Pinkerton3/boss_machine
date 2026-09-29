const express = require('express');
const { getAllFromDatabase, addToDatabase, getFromDatabaseById, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');
const apiRouter = express.Router();
const allMinions = getAllFromDatabase('minions');
//console.log(allMinions);



module.exports = apiRouter;

// Minion routes

// GET all minions
apiRouter.get('/minions', (req, res, next) => {
    res.send(allMinions);
});

// POST new minion and save to database
apiRouter.post('/minions', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body);
  if(newMinion) {
    allMinions.push(newMinion);
    addToDatabase('minions', newMinion);
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
  const minionId = getFromDatabaseById('minions', req.params.minionId);
  if (minionId) {
    const updatedMinion = Object.assign(minionId, req.body);
    updateInstanceInDatabase('minions', updatedMinion);
  } else {
    res.status(404).send();
  }
})

// DELETE single minion by id
apiRouter.delete('/minions/:minionId', (req, res, next) => {
  const minionId = getFromDatabaseById('minions', req.params.minionId);
  if (minionId) {
    deleteFromDatabasebyId('minions', req.params.minionId);
    res.status(204).send();
  } else {
    res.status(400).send();
  }
})

// Idea routes

const allIdeas = getAllFromDatabase('ideas');

// Get all ideas

apiRouter.get('/ideas', (req, res, next) => {
  res.send(allIdeas);
})

// Post new idea

apiRouter.post('/ideas', (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  if(newIdea) {
    allIdeas.push(newIdea);
    addToDatabase('ideas', newIdea);
    res.status(201).send(newIdea);
  } else {
    res.status(400).send();
  }
})

// Get single idea

apiRouter.get('/ideas/:ideaId', (req, res, next) => {
  const ideaId = getFromDatabaseById('ideas', req.params.ideaId);
  if (ideaId) {
    res.send(ideaId);
  } else {
    res.status(404).send();
  }
})

// Put single idea

apiRouter.put('/ideas/:ideaId', (req, res, next) => {
  const ideaId = getFromDatabaseById('ideas', req.params.ideaId);
  if (ideaId) {
    const updatedIdea = Object.assign(ideaId, req.body);
    updateInstanceInDatabase('ideas', updatedIdea);
    res.status(200).send();
  } else {
    res.status(404).send();
  }
});

// Delete single idea

apiRouter.delete('/ideas/:ideaId', (req, res, next) => {
  const ideaId = getFromDatabaseById('ideas', req.params.ideaId);
  if(ideaId) {
    const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId);
    res.status(204).send();
  } else {
    res.status(404).send();
  }
})