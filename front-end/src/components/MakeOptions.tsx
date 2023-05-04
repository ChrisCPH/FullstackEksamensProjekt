import Game from "../classes/Games";

const makeOptions = (method:string, body?:Game) => {
    var opts = {
        method: method,
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
        body: body ? JSON.stringify(body) : undefined
    };
    return opts;
};

export default makeOptions