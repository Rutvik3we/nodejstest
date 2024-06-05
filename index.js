// const pokemon = require("pokemon");



// console.log(pokemon.random());


const http = require("http");

port = process.env.port;

hostname = "localhost";

const server = http.createServer((req,res,next)=>{
    res.end("working");
})

server.listen(port,hostname,()=>{
    console.log(`server is working on http://${hostname}:${port}`);
})