import Game from "../models/game"
import Rating from "../models/rating";
import User from "../models/user";
import { GameType, RatingType, UserType, Context, Args } from '../types';

export default {
    createGame: async (_parent:GameType, {input}:Args) => {
      return await Game.create(input);
    },
    deleteGame: async (_parent:never, { id }:Args) => {
      const result = await Game.findByIdAndDelete(id);
      return result ? true : false;
    },
    updateGame: async (_parent:never, { id, input }:Args) => {
      const result = await Game.findByIdAndUpdate(id, input);
      return result;
    },
    createRating: async (_parent:RatingType, {input}:Args) => {
      return await Rating.create(input);
    },
    addRatingToGame: async (_parent:never, {input}:any) => {
      const game = await Game.findById(input.gameId);
      const rating = await Rating.findById(input.ratingId);

      if (!game!.ratings.includes(input.ratingId)) {
        game!.ratings.push(input.ratingId);
        await game!.save();
      }

      if (!rating!.games.includes(input.gameId)) {
        rating!.games.push(input.gameId);
        await rating!.save();
      }

      const populatedGame = await game!.populate("ratings");

      return populatedGame;
    },
    addRatingToUser: async (_parent:never, {input}:any) => {
      const user = await User.findById(input.userId);
      const rating = await Rating.findById(input.ratingId);

      if (!user!.ratings.includes(input.ratingId)) {
        user!.ratings.push(input.ratingId);
        await user!.save();
      }

      if (!rating!.users.includes(input.userId)) {
        rating!.users.push(input.userId);
        await rating!.save();
      }

      const populatedUser = await user!.populate("ratings");

      return populatedUser;
    },
    deleteRating: async (_parent:never, { id }:Args) => {
      const result = await Rating.findByIdAndDelete(id);
      return result ? true : false;
    },
    updateRating: async (_parent:never, { id, input }:Args) => {
      const result = await Rating.findByIdAndUpdate(id, input);
      return result;
    },
    createUser: async (_parent:UserType, {input}:Args) => {
      return await User.create(input);
    },
    deleteUser: async (_parent:never, { id }:Args) => {
      const result = await User.findByIdAndDelete(id);
      return result ? true : false;
    },
    updateUser: async (_parent:never, { id, input }:Args) => {
      const result = await User.findByIdAndUpdate(id, input);
      return result;
    },
    addGameToUser: async (_parent:never, {input}:any) => {
      const game = await Game.findById(input.gameId);
      const user = await User.findById(input.userId);

      if (!game.gameOwners.includes(input.userId)) {
        game!.gameOwners.push(input.userId);
        await game!.save();
      }

      if (!user!.gamesOwned.includes(input.gameId)) {
        user!.gamesOwned.push(input.gameId);
        await user!.save();
      }

      const populatedUser = await user!.populate("gamesOwned");

      return populatedUser;
    },
};


