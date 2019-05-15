const express = require('express');
const validateUser = require('../middleware/validateUser');
const validateBody = require('../middleware/validateBody');
const validateUserId = require('../middleware/validateUserId');
const userDb = require('../users/userDb');

const router = express.Router();

router.post('/', validateBody, validateUser, async (req, res) => {
    try {
        const user = await userDb.insert(req.body);

        res.status(200).json({ message: "wip"})
    } catch (err){
        res.status(500).json({ err })
    }
});

// router.post('/:id/posts', validateUserId, async (req, res) => {
//     try {
//         const posts = await userDb.getUserPosts(req.user.id)
//
//         if (posts) return res.status(200).json(posts);
//         else return res.status(400).json({ message: "Could not retrieve the posts"})
//     } catch(err) {
//         res.status(500).json(err)
//     }
// });

router.get('/', async (req, res) => {
    try {
        const users = await userDb.get();

        res.json(users);
    } catch(err) {
        res.status(500).json(err);
    }
});

router.get('/:id', validateUserId, (req, res) => {

});

router.get('/:id/posts', validateUserId, async (req, res) => {
    try {
        const posts = await userDb.getUserPosts(req.user.id)

        if (posts) return res.status(200).json(posts);
        else return res.status(400).json({ message: "Could not retrieve the posts"})
    } catch(err) {
        res.status(500).json(err)
    }
});

router.delete('/:id', (req, res) => {

});

router.put('/:id', (req, res) => {

});

module.exports = router;
