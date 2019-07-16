const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema) {
  const { error } = joi.validate(data, schema);
  return error;
}

function validationHandler(schema, check = 'body') {
  return function(req, res, next) {
    const error = validate(req[check], schema);

    error ? next(boom.badRequest(error)) : next();
  };
}

module.exports = validationHandler;
