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
    ratings: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rating'
    }],
    rating_average: Number,
    soldGames: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserOwnedGames'
    }],
    soldGamesCount: Number
  });

const Game = mongoose.model('Game', GameSchema, 'Games');

export default Game;