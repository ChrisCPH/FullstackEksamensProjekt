class User {
    id:number
    username:string
    type:string

    constructor(id:number, username:string, type:string) {
        this.id = id;
        this.username = username;
        this.type = type;
    }
}

export default User