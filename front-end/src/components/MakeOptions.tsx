const makeOptions = (method:string, body?:any) => {
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