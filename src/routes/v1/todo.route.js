const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const todoValidation = require('../../validations/todo.validation');
const TodoController = require('../../controllers/todo.controller');

const router = express.Router();

router
  .route('/')
  .post(auth(), validate(todoValidation.createTodo),TodoController.createTodo)
  .get(auth(), TodoController.getAllTodoList);
  router
  .get("/:id",auth(),validate(todoValidation.getTodo),TodoController.getlistById)
  .patch("/:id",auth(),validate(todoValidation.getTodo),TodoController.updateTodoList);
  

module.exports = router;
