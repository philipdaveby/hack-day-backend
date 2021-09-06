const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require("mongoose");

const workoutsDatabase = require('./database/workoutsDatabase.json');
const Exercise = require('./models/Exercise');
const Workout = require('./models/Workout');

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("Connected to db!");
  app.listen(port, () => console.log(`Listening on port ${port}`));
  });

app.get('/api/exercises', (req, res) => {
  Exercise.find({}, (err, exercises) => {
    res.send(exercises);
  });
});

app.post('/api/exercise', async (req, res) => {

  const exercise = new Exercise({
    title: req.body.title,
    category: req.body.category
  });
  
  res.send(
    `I received your POST request. This is what you sent me: ${JSON.stringify(req.body)}`,
  );

  try {
    await exercise.save();
  } catch (err) {
    console.log(err)
  }
});

app.get('/api/workouts', (req, res) => {
  Workout.find({}, (err, workouts) => {
    res.send(workouts);
  });
});

app.post('/api/workout', async (req, res) => {

  const workout = new Workout({
    title: req.body.title,
    workout: req.body.workout
  });

  res.send(
    `I received your POST request. This is what you sent me: ${JSON.stringify(req.body)}`,
  );

  try {
    await workout.save();
  } catch (err) {
    console.log(err)
  }
});

/*

- Get workouts
- Post workout
- Put workout
- Delete workouts

*/

// mongoose.set("useFindAndModify", false);
