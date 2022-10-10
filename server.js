import express from 'express';
import gameRoutes from "./routes/game.js"
import userRoutes from "./routes/user.js"
import achatRoutes from "./routes/achat.js"
import mongoose from 'mongoose';

const app = express();

app.use(express.json())

const hostname = '127.0.0.1';
const port = process.env.PORT || 9090;

mongoose.connect('mongodb://localhost:27017/S4-ex');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected successfully");
});


app.use("/game",gameRoutes);
app.use("/user", userRoutes);
app.use("/buy", achatRoutes);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); 