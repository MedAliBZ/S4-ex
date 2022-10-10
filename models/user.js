import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        wallet: {
            type: Number,
            min: 0,
            required: true
        },
        achats: [{
            gameId: {
                type: String
            },
            boughtDate: {
                type: Date,
                default: Date.now
            }
        }]
    },
    {
        timestamps: true
    }
)

const User = mongoose.model("User", UserSchema);
export default User;
