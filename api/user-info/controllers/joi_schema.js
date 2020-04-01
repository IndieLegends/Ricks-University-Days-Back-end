const Joi = require('@hapi/joi');

const createSchema = Joi.object({
  nickname: Joi.string()
    .min(3)
    .max(50)
    .required(),

  character: Joi.number()
    .min(1)
    .max(2)
    .required(),

});

module.exports = {createSchema};



