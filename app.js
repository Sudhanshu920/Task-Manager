const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.send(`TASK MANAGER APP`);
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

const DB = process.env.Database_URL.replace('<password>', process.env.Password);

const start = async () => {
  try {
    await connectDB(DB);
    app.listen(port, console.log(`server is listening on port ${port}....`));
  } catch (error) {
    console.log(error);
  }
};

start();