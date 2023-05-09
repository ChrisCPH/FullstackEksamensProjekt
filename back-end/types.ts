import Types from "mongoose";

type UserType = {
    id:Types.ObjectId;
    username:string;
    password:string;
    ratingId:[Types.ObjectId];
    gamesOwned:[Types.ObjectId];
    gamesOwnedCount:number;
};

type RatingType = {
    id:Types.ObjectId;
    rating:number;
    comment:string;
    gameId:Types.ObjectId;
    userId:Types.ObjectId;
};

type GameType = {
    id:Types.ObjectId;
    title:string;
    releaseData:string;
    price:number;
    developer:string;
    publisher:string;
    ratings:[Types.ObjectId];
    ratingAverage:number;
    soldGames:[Types.ObjectId];
    soldGamesCount:number;
};

type UserOwnedGameType = {
    id:Types.ObjectId;
    gameId:Types.ObjectId;
    userId:Types.ObjectId;
};

type Context = {
    users: UserType[];
    ratings: RatingType[];
    games: GameType[];
    userOwnedGames: UserOwnedGameType[];
}

type Args = {
    id:string;
    input:UserType | GameType;
}

export type {UserType, RatingType, GameType, UserOwnedGameType, Context, Args};