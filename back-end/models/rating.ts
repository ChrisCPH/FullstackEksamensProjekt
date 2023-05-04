import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({
    rating: {
      type: Number,
      required: true
    },
    comment: String,
    Game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Game'
    },
    User: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
  });

const Rating = mongoose.model('Rating', RatingSchema, 'Ratings');

export default Rating;