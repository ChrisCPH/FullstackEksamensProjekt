import Game from "../models/game";
import Rating from "../models/rating";
import User from "../models/user";
import UserOwnedGame from "../models/userOwnedGame";
import { Args } from "../types";

export default {
    // user: async (_parent:never, {id}:Args) => await User.findById(id),
    // rating: async (_parent:never, {id}:Args) => await Rating.findById(id),
    // game: async (_parent:never, {id}:Args) => await Game.findById(id),
    // userOwnedGame: async (_parent:never, {id}:Args) => await UserOwnedGame.findById(id),
    // users: async () => await User.find({}),
    // ratings: async () => await Rating.find({}),
    game: async (_parent:never, {id}:Args) => await Game.findById(id),
    games: async () => await Game.find({}),
    //userOwnedGames: async () => await UserOwnedGame.find({})
}