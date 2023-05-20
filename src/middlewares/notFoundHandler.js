export default function notFound(req, res, next) {
  return res.json({
    status: 404,
    method: req.method,
    path: req.url,
    response: "not found",
  });
}
