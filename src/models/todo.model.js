const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },
    discription: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    status: {
      default:"pending",
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);



/**
 * @typedef Token
 */
const Todo = mongoose.model('Todo-list', todoSchema);

module.exports = Todo;
