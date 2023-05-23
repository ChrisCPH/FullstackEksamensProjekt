class User {
    id?: string
    username:string
    password:string

    constructor(username:string, password:string) {
        //this.id = id;
        this.username = username;
        this.password = password;
    }
}

export default User