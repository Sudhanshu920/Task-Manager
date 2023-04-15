const Task = require('../models/tasks');

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = (req, res) => {
  res.send('get a task');
};
const updateTask = (req, res) => {
  res.send('update a task');
};
const deleteTask = (req, res) => {
  res.send('delete a task');
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
