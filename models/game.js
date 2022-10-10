import mongoose from "mongoose";

const GameSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        }
    },
    {
        timestamps: true
    }
)

const Game = mongoose.model("Game", GameSchema);
export default Game;