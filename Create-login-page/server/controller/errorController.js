const handleCastErrorDB = (err, res) => {
  return res.status(400).send({
    status: "Invalid path",
    code: 401,
  });
};

const handleDuplicateFieldsDB = (err, res) => {
  return res.status(400).send({
    status: `Duplicate field value: Please use another value!`,
    code: 401,
  });
};
const handleValidationErrorDB = (err, res) => {
  return res.status(400).send({
    status: "Invalid input data.Please provide a valid data",
    code: 401,
  });
};

const sendErrorDev = (err, res) => {
  return res.status(400).send(err ? err : "Something went wrong");
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status;

  let error = { ...err };

  if (err.name === "CastError") handleCastErrorDB(error, res);
  if (err.code === 11000) handleDuplicateFieldsDB(error, res);
  if (err.name === "ValidationError") handleValidationErrorDB(error, res);

  sendErrorDev(error, res);
};
