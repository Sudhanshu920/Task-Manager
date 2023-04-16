const { customAPIError } = require('../errors/customError');

const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: 'something went wrong, please try again later!' });
};

module.exports = errorHandlerMiddleware;
