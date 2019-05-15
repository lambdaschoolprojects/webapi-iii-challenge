const postDb = require("../posts/postDb");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const post = await postDb.getById(id);

    if (Object.keys(post).length === 0)
      return res.status(400).json({ message: "No such post" });

    req.post = post;
  } catch (err) {
    res.status(500).json(err);
  }

  next();
};
