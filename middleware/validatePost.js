module.exports = (req, res, next) => {
  const { body } = req;

  if (!body.text) return res.status(400).json({ message: "Missing post data" });

  next();
};
