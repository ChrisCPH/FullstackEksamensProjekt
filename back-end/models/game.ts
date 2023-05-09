import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    releaseDate: String,
    price: Number,
    developer: String,
    publisher: String,
  });

const Game = mongoose.model('Game', GameSchema, 'Games');

export default Game;