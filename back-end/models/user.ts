import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    password: {
        type: String,
        required: true
    },
    ratings: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Rating'
    },
    gamesOwned: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: 'Game'
    },
  });

const User = mongoose.model('User', UserSchema, 'Users');

export default User;