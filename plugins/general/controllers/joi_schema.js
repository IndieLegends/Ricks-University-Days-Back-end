const Joi    = require('@hapi/joi');

const schema = Joi.object({
  "username": Joi.string()
    .min(3)
    .max(50)
    .required()
});

module.exports = {schema};
