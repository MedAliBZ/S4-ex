import User from '../models/user.js'


const signup = async (req, res) => {
    let user = new User(req.body)
    try {
        await user.save();
        res.status(201).json(user)
    } catch (error) {
        res.json(400).json(error)
    }
}

const signin = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username, password: req.body.password })
        if (user)
            res.json(user)
        else
            res.status(403).json({ error: "wrong username or password!" })
    }
    catch (err) {
        res.status(400).json(err)
    }
}

const update = async (req, res) => {
    try {
        await User.findOneAndUpdate({ username: req.body.oldUsername }, req.body)
        const newUser = await User.findOne(req.body)
        res.json(newUser)
    }
    catch (err) {
        res.status(400).json(err)
    }
}

export { update, signin, signup }