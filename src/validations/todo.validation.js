const Joi = require('joi');


const createTodo = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    discription: Joi.string().required(),
    userId: Joi.string().required(),
  }),
};
const getTodo = {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      title: Joi.string(),
      discription: Joi.string(),
      status: Joi.string(),
    })
  };
module.exports={
    createTodo,
    getTodo
}