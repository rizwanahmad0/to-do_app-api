const jwt = require('jsonwebtoken');
const moment = require('moment');
const httpStatus = require('http-status');
const config = require('../config/config');
const userService = require('./user.service');
const { Token } = require('../models');
const ApiError = require('../utils/ApiError');
const { tokenTypes } = require('../config/tokens');

const {Todo} = require('../models')


const createTodo = async(data) => {
    const todo = Todo.create(data);
    return todo
  
};
const getAllTodoList = async(data) => {
    const todo = Todo.find({});
    return todo
  
};
const getlistById = async(userId) => {
   // console.log(data)
    const todo = Todo.find({_id:userId});
    return todo
  
};

const updateTodoList = async(userId,data) => {
     console.log("JKSNM")
     const todo = Todo.updateOne({_id:userId},data);
     return todo
   
 };

module.exports={
    createTodo,
    getAllTodoList,
    getlistById,
    updateTodoList

}