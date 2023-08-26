const Joi = require('joi');

const usersSchemaValidation = Joi.object({
  id:Joi.number().required(),
  firstname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(6)
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    .required()
    .messages({
      'string.pattern.base': 'Password must be alphanumeric and have a length between 3 and 30 characters'
    })
});

module.exports = usersSchemaValidation;
