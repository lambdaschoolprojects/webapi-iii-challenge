module.exports = (req, res, next) => {
  const { body } = req;

  if (!body.name)
    return res.status(400).json({ message: "Missing required field: name " });

  next();
};
