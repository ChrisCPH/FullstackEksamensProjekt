import Game from "./Game";
import User from "./User";

class Rating {
    id?:string;
    rating: number;
    comment: string;
    games: Game;
    users: User;

    constructor(rating: number, comment: string, games: Game, users: User) {
        this.rating = rating;
        this.comment = comment;
        this.games = games;
        this.users = users;
    }
}

export default Rating