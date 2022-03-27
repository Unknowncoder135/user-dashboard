const express = require('express')
const Post = require('../model/Post')

router = express.Router();

router.get('/', async (req, res) => {
    try {
        const postss = await Post.find()
        res.status(200)
        res.send(postss)
    }
    catch (err) {
        res.status(404).res.send(err)
    }
})

router.post('/', async (req, res) => {
    const post = new Post({
        "name": req.body.name,
        "username": req.body.username,
        "email": req.body.email,
        "phone": req.body.phone,
        "website": req.body.website
    })
    try {
        const ss = await post.save()
        res.json(ss)
        console.log('sucess')
    }
    catch (err) {
        res.json({ massage: err })
    }
})
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        res.json(post)

    }
    catch (err) {
        res.status(400)
        res.json({ massage: err })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const removePost = await Post.remove({ _id: req.params.id })
        res.json(removePost)
    }
    catch (err) {
        res.status(400)
        res.json({ massage: err })
    }
})

router.put('/:id', async (req, res) => {
    try {
        // res.setHeader('Content-Type', 'applicatin/json')
        const update = await Post.findOneAndUpdate({_id: req.params.id },
            { $set: { name: req.body.name, username: req.body.username, email: req.body.email, phone: req.body.phone, website: req.body.website } },
            {
                new: true,
                useFindAndModify: false
            })
        res.status(200)
        res.json(update)
        // res.send('doneeeeeeeeeeeeeee')
    }
    catch (err) {
        res.status(400)
        res.send(err)
        // res.json({massage:err})
    }

})

module.exports = router;