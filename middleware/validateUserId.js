const userDb = require('../users/userDb');

modules.export = async (req, res, next) => {
    if(!req.body.id) return res.status(400).json({ message: "Invalid user id" });

    try {
        const user = await userDb.getById(req.body.id);
        if (!user) return res.status(400).json({ message: "Invalid user id"});

        req.user = user;
    } catch(err) {
        res.status(500).json({ err });
    }

    next();
}