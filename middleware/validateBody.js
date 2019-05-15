module.exports = (req, res, next) => {
    const { body } = req;

    console.log(req.body);

    if (!body) return res.status(400).json({ message: "Missing user data"});

    next();
}