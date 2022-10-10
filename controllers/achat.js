import Game from "../models/game.js";
import User from "../models/user.js";


export const buy = async (req, res) => {
    try {
        const game = await Game.findOne({ title: req.body.game });
        const user = await User.findOne({ username: req.body.user });

        if (user.wallet >= game.price && game.quantity > 0) {
            await user.update({wallet:  user.wallet - game.price});
            await game.update({quantity:  game.quantity-1})
            user.achats.push({ gameId: game.title })
            await user.save()
            res.json(user)
        }
        else
            res.status(400).json({ error: "price or quantity" })
    }
    catch (err) {
        res.status(400).json({ error: "an error happened" })
    }
}