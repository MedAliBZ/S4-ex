import Game from '../models/game.js'


export const getAll = async (req, res) => {
    const game = await Game.find().select({ "description": 0 })
    res.status(200).json(game);
}

export const addOnce = async (req, res) => {
    const game = new Game(req.body);
    try {
        await game.save()
        res.status(201).json({ message: "Created !", entity: game });
    }
    catch (err) {
        res.status(400).json(err)
    }
}

export const getOnce = async (req, res) => {
    try {
        const game = await Game.findOne({ title: req.params.title })
        res.status(200).json(game);
    }
    catch (err) {
        res.status(400).json(err)
    }
}

export const patchOnce = async (req, res) => {
    try {
        await Game.findOneAndUpdate({title: req.body.oldTitle}, req.body);
        const game = await Game.findOne(req.body);
        res.status(200).json({ message: "Updated !", entity: game });
    } catch (error) {
        res.status(400).json(error);
    }
}