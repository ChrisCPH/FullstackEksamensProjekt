import express = require("express");
import User from "../models/user";
import mongoose from "mongoose";


export const getUser = async(req: express.Request, res : express.Response) => {
    try {
        const user = await User.findById(mongoose.Types.ObjectId.createFromHexString(req.params.id));
        //const user = await User.find({id: {$gt : req.params.id }});

        res.status(200)
        .json({
                //data: {user},
                user,
                results: user
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

export const getUserByUsernameAndPassword = async(req: express.Request, res : express.Response) => {
    try {
        const user = await User.findOne({username: req.body.username, password: req.body.password });
        res.status(200)
        .json({
                user
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

export const getAllUsers = async(req: express.Request, res : express.Response) => {
    try {
        const data = await User.find({});

        res.status(200)
        .json({
                //data: {data},
                users: data,
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

export const createUser = async(req : express.Request, res: express.Response) => {
    try {
        const newUser = await User.create(req.body);
    
        res.status(201)
            .json({
                newUser
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

export const deleteUser = async (req : express.Request, res : express.Response) => {
    try {
        await User.findByIdAndDelete(mongoose.Types.ObjectId.createFromHexString(req.params.id));
        res.status(204).json();
    } catch (e) {
        res.status(204).json;
    }
}

export const updateUser = async (req : express.Request, res : express.Response) => {
    try {
        const updatedUser = await User.findByIdAndUpdate((mongoose.Types.ObjectId.createFromHexString(req.params.id)), req.body, { new: true, runValidators: true })
        res.status(200)
            .json({
                data: updatedUser
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