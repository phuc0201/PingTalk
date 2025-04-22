const Joi = require("joi");
const { StatusCodes } = require("http-status-codes");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");

const validate = (schema) => (req, res, next) => {
  const validSchema = pick(schema, ["params", "query", "body"]);
  const object = pick(req, Object.keys(validSchema));
  const { value, error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" } })
    .validate(object);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");

    return res.status(StatusCodes.BAD_REQUEST).send({
      status: StatusCodes.BAD_REQUEST,
      message: errorMessage,
    });
  }

  Object.assign(req, value);
  return next();
};

module.exports = validate;
