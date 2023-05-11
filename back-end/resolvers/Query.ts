import Game from "../models/game";
import Rating from "../models/rating";
import User from "../models/user";
import UserOwnedGame from "../models/userOwnedGame";
import { Args } from "../types";

export default {

    // User
    user: async (_parent:never, {id}:Args) => await User.findById(id),
    users: async () => await User.find({}),

    // Rating
    rating: async (_parent:never, {id}:Args) => await Rating.findById(id),
    ratings: async () => await Rating.find({}),

    // UserOwnedGame
    userOwnedGame: async (_parent:never, {id}:Args) => await UserOwnedGame.findById(id),
    userOwnedGames: async () => await UserOwnedGame.find({}),

    // Game
    game: async (_parent:never, {id}:Args) => await Game.findById(id),
    games: async () => await Game.find({}),
}