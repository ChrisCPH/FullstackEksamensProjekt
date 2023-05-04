class Games {
    id:number
    name:string
    price:number
    developer:string
    publisher:string
    release_date:string
    platform:string[]

    constructor(id:number, name:string, price:number, developer:string, publisher:string, release_date:string, platform:string[]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.developer = developer;
        this.publisher = publisher;
        this.release_date = release_date;
        this.platform = platform;
    }
}

export default Games