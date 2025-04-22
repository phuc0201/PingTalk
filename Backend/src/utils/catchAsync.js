const catchAsync = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch((err) => {
    return res.status(err.statusCode || 500).send({
      status: err.statusCode || 500,
      message: err.message,
    });
  });
};

module.exports = catchAsync;
