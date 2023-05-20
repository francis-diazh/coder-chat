function errorHandler(error, req, res, next) {
  console.log(error);
  return res.json({
    status: 500,
    method: req.method,
    path: req.url,
    response: error.message,
  });
}

export default errorHandler;
