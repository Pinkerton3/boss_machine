const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;

  if (numWeeks === undefined || weeklyRevenue === undefined) {
    return res.status(400).send('numWeeks and weeklyRevenue are required.');
  }

  if (isNaN(Number(numWeeks)) || isNaN(Number(weeklyRevenue))) {
    return res.status(400).send('numWeeks and weeklyRevenue must be numbers.');
  }

  if (Number(numWeeks) * Number(weeklyRevenue) < 1000000) {
    return res.status(400).send('This idea is not worth a million dollars!');
  }

  next();
}

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
