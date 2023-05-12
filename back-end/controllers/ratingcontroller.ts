import express = require("express");
import Rating from "../models/rating";

export const getRating = async(req: express.Request, res : express.Response) => {
    try {
        const rating = await Rating.findById(req.params.id);

        res.status(200)
        .json({
                data: {rating},
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

export const getAllRatings = async(req: express.Request, res : express.Response) => {
    try {
        const data = await Rating.find({});

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

export const createRating = async(req : express.Request, res: express.Response) => {
    try {
        const newRating = await Rating.create(req.body);
    
        res.status(201)
            .json({
                data: newRating
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

export const deleteRating = async (req : express.Request, res : express.Response) => {
    try {
        await Rating.findByIdAndDelete(req.params.id);
        res.status(204).json();
    } catch (e) {
        res.status(204).json;
    }
}

export const updateRating = async (req : express.Request, res : express.Response) => {
    try {
        const updatedRating = await Rating.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200)
            .json({
                data: updatedRating
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