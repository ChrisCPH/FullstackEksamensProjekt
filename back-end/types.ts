import Types from "mongoose";

type UserType = {
    id:Types.ObjectId;
    username:string;
    password:string;
    ratings:Types.ObjectId;
    gamesOwned:Types.ObjectId;
};

type RatingType = {
    id:Types.ObjectId;
    rating:number;
    comment:string;
};

type GameType = {
    id:Types.ObjectId;
    title:string;
    releaseDate:string;
    price:number;
    developer:string;
    publisher:string;
    ratings:Types.ObjectId;
    ratingAverage:number;
    gameOwners:Types.ObjectId;
};

type Context = {
    users: UserType[];
    ratings: RatingType[];
    games: GameType[];
}

type Args = {
    id:string;
    input:UserType | GameType | RatingType;
}

export type {UserType, RatingType, GameType, Context, Args};