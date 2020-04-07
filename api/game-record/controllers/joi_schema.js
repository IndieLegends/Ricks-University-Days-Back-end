const Joi    = require('@hapi/joi');

const schema = Joi.object({
  game_number: Joi.number()
  .min(1)
  .max(15)
  .required(),
  action: Joi.string()
    .min(3)
    .max(150)
    .required(),
  reaction: Joi.string()
    .min(3)
    .max(150)
    .required()
});

module.exports = {schema};
