class User {
    id?: string
    username:string
    password:string
    type:string

    constructor(username:string, password:string, type:string) {
        //this.id = id;
        this.username = username;
        this.password = password;
        this.type = type;
    }
}

export default User