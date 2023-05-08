import Game from "../models/game"
import { GameType } from '../types';

export default {
    createGame: async (_parent:never, { title, price, releaseData, developer, publisher }:GameType) => {
      const newGame = new Game({ title, price, releaseData, developer, publisher});
      await newGame.save();
      return newGame;
    },
    deleteGame: async (_parent:never, { id }:GameType) => {
      const result = await Game.findByIdAndDelete(id);
      return result ? true : false;
    },
    updateGame: async (_parent:never, { id,  price, releaseData, developer, publisher}:GameType) => {
      const result = await Game.findByIdAndUpdate(id, {name,  price, releaseData, developer, publisher});
      return result;
    }
};

