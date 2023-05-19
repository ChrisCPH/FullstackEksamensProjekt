class Game {
    id?:string
    title:string
    releaseDate: string
    price: number
    developer: string
    publisher: string

    constructor(name:string, price:number, developer:string, publisher:string, releaseDate:string) {
        this.title = name;
        this.price = price;
        this.developer = developer;
        this.publisher = publisher;
        this.releaseDate = releaseDate;
    }
}

export default Game