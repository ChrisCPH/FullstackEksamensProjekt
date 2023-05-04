import mongoose from "mongoose";

const UserOwnedGamesSchema = new mongoose.Schema({
    Game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  });

const UserOwnedGame  = mongoose.model('UserOwnedGame', UserOwnedGamesSchema, 'userOwnedGames');

export default UserOwnedGame;