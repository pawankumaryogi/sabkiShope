// const notFound = (req, res, next) => {
//   const errorr = new Error(`Not Found-${req.originalUrl}`);
//   res.status(404);
//   next(errorr);
// };

// const errorHandler = (err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : statusCode;
//   res.status(statusCode);
//   res.json({
//     message: err.message,
//     stack: process.NODE_ENV === "production" ? null : err.stack,
//   });
// };

// export { notFound, errorHandler };

const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export { notFound, errorHandler };
