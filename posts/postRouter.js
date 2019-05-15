const express = require("express");
const validatePost = require("../middleware/validatePost");

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

router.get("/:id", (req, res) => {});

router.delete("/:id", (req, res) => {});

router.put("/:id", (req, res) => {});

module.exports = router;
