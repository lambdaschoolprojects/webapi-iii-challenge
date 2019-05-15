const express = require("express");
const validatePost = require("../middleware/validatePost");
const validatePostId = require("../middleware/validatePostId");

const postDb = require("../posts/postDb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const posts = await postDb.get();

    if (Object.keys(posts).length === 0)
      return res.status(400).json({ message: "Could not retrieve posts." });

    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", validatePostId, (req, res) => {
  res.json(req.post);
});

router.delete("/:id", validatePostId, async (req, res) => {
  try {
    const status = await postDb.remove(req.post.id);

    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {});

module.exports = router;
