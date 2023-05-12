import Game from "../models/game"
import Rating from "../models/rating";
import User from "../models/user";
import UserOwnedGame from "../models/userOwnedGame";
import { GameType, RatingType, UserOwnedGameType, UserType, Context, Args } from '../types';

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
    createUserOwnedGame: async (_parent:UserOwnedGameType, {input}:Args) => {
      return await UserOwnedGame.create(input);
    },
    deleteUserOwnedGame: async (_parent:never, { id }:Args) => {
      const result = await UserOwnedGame.findByIdAndDelete(id);
      return result ? true : false;
    },
    updateUserOwnedGame: async (_parent:never, { id, input }:Args) => {
      const result = await UserOwnedGame.findByIdAndUpdate(id, input);
      return result;
    },
};


