import Game from "../models/game";
import Rating from "../models/rating";
import User from "../models/user";
import { Args } from "../types";

export default {

    // User
    user: async (_parent:never, {id}:Args) => await User.findById(id).populate("ratings").populate("gamesOwned"),
    users: async () => await User.find({}).populate("ratings").populate("gamesOwned"),

    // Rating
    rating: async (_parent:never, {id}:Args) => await Rating.findById(id).populate("games").populate("users"),
    ratings: async () => await Rating.find({}).populate("games").populate("users"),

    // Game
    game: async (_parent:never, {id}:Args) => await Game.findById(id).populate("ratings").populate("gameOwners"),
    games: async () => await Game.find({}).populate("ratings").populate("gameOwners"),
}