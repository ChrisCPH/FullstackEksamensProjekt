import express = require("express");
import Game from "../models/game";
import mongoose from "mongoose";

const gameData = [
    {
        "id": 1,
        "title": "Counter-Strike: Source",
        "releaseDate": "1 November 2004",
        "price": 500,
        "developer": "Valve",
        "publisher": "Valve",
    }
  ]

export const getGame = async(req: express.Request, res : express.Response) => {
    try {
        const game = await Game.find({title: {$gt : req.params.title }});

        res.status(200)
        .json({
                data: {game},
                results: game.length
            }
        )
    } catch(e) {
        res.status(500).json(
            {
                status: "error",
                message: e
            }
        )
    }
}

export const getAllGames = async(req: express.Request, res : express.Response) => {
    try {
        const games = await Game.find({});

        res.status(200)
        .json({
                //data: {data},
                games: games,
                results: games.length
            }
        )
    } catch(e) {
        res.status(500).json(
            {
                status: "error",
                message: e
            }
        )
    }
}

export const createGame = async(req : express.Request, res: express.Response) => {
    try {
        const newGame = await Game.create(req.body);
    
        res.status(201)
            .json({
                data: newGame
            });
    } catch(e) {
        res.status(400)
            .json(
                {
                status: "error",
                message: e
            });
    }

}

export const deleteGame = async (req : express.Request, res : express.Response) => {
    try {
        await Game.findByIdAndDelete((mongoose.Types.ObjectId.createFromHexString(req.params.id)));
        res.status(204).json();
    } catch (e) {
        res.status(204).json;
    }
}

export const updateGame = async (req : express.Request, res : express.Response) => {
    try {
        const updatedGame = await Game.findByIdAndUpdate((mongoose.Types.ObjectId.createFromHexString(req.params.id)), req.body, { new: true, runValidators: true });
        res.status(204)
            .json({
                data: updatedGame
            });
    } catch (e) {
        res.status(404)
            .json(
                {
                status: "error",
                message: e
            });
    }
}