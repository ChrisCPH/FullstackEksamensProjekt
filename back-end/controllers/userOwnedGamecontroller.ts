import express = require("express");
import UserOwnedGame from "../models/userOwnedGame";


export const getUserOwnedGame = async(req: express.Request, res : express.Response) => {
    try {
        const userOwnedGame = await UserOwnedGame.findById(req.params.id);

        res.status(200)
        .json({
                data: {userOwnedGame},
                results: userOwnedGame
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

export const getAllUserOwnedGames = async(req: express.Request, res : express.Response) => {
    try {
        const data = await UserOwnedGame.find({});

        res.status(200)
        .json({
                data: {data},
                results: data.length
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

export const createUserOwnedGame = async(req : express.Request, res: express.Response) => {
    try {
        const newUserOwnedGame = await UserOwnedGame.create(req.body);
    
        res.status(201)
            .json({
                data: newUserOwnedGame
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

export const deleteUserOwnedGame = async (req : express.Request, res : express.Response) => {
    try {
        await UserOwnedGame.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (e) {
        res.status(204).json;
    }
}

export const updateUserOwnedGame = async (req : express.Request, res : express.Response) => {
    try {
        const updatedUserOwnedGame = await UserOwnedGame.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(200)
            .json({
                data: updatedUserOwnedGame
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