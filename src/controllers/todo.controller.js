const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services');
const todoService = require('../services/todo.service')

const createTodo= catchAsync(async (req, res) => {
    const todo = await todoService.createTodo(req.body);
    res.status(httpStatus.CREATED).send(todo);
  });
  const getAllTodoList= catchAsync(async (req, res) => {
    const todo = await todoService.getAllTodoList();
    res.status(httpStatus.CREATED).send(todo);
  });

  const getlistById= catchAsync(async (req, res) => {
    const todo = await todoService.getlistById(req.params.id);
    res.status(httpStatus.CREATED).send(todo);
  });
  const updateTodoList= catchAsync(async (req, res) => {
    const todo = await todoService.updateTodoList(req.params.id,req.body);
    res.status(httpStatus.CREATED).send(todo);
  });

  module.exports={
    createTodo,
    getAllTodoList,
    getlistById,
    updateTodoList
  }

  