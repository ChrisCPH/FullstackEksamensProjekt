import express = require("express");
import Game from "../models/game";

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
    }
    catch(e) {
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
        const data = await Game.find({price: {$gt : 0}});

        res.status(200)
        .json({
                data: {data},
                results: data.length
            }
        )
    }
    catch(e) {
        res.status(500).json(
            {
                status: "error",
                message: e
            }
        )
    }
}

export const createGame = async(req : express.Request, res: express.Response) => {

    const jsonData = req.body;
    console.log()

    const newCar = await Game.create(req.body);

    res.status(201)
        .json({
            status: "success",
            data: newCar
        })
}