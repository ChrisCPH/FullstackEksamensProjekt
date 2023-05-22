import Rating from "./Rating"

class Game {
    id?:string
    title:string
    releaseDate: string
    price: number
    developer: string
    publisher: string
    ratingAverage: number
    ratings: Rating

    constructor(name:string, price:number, developer:string, publisher:string, releaseDate:string, ratingAverage: number, ratings: Rating) {
        this.title = name;
        this.price = price;
        this.developer = developer;
        this.publisher = publisher;
        this.releaseDate = releaseDate;
        this.ratingAverage = ratingAverage;
        this.ratings = ratings;
    }
}

export default Game