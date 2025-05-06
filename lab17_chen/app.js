/*
console.log("------example 1: console messaging-----")
console.warn("this is a warning message")
console.error("error!")

console.log("------example 2:global object of JS-----")
setTimeout( () => {
    console.log("welcome to node JS")
}, 3000) //3000 mean 3 secs

let count = 0;
const timer = setInterval(() => {
    count +=2;
    console.log(`counting = ${count}`)
    if (count ==10)
        clearInterval(timer)
}, 2000)
*/

console.log("------example 3: modules-----")
const name = require("./mod")
console.log(name.helper("peter"))
console.log(name.id(222))
console.log(name.email("123@name.com"))

console.log("------example 4: creating a server-----")
//import the http module
const http = require('http')
const fs = require('fs') // file stream module

//create server
const server = http.createServer((request, response)=>{
    //send the request

    /*response.write("this is the response from the server")
    response.end("\n------ end -----------")
    console.log(request.url)*/

    response.writeHead(200,{'content-type':'text/html'})
    const readstream = fs.createReadStream(__dirname + '/index.html')

    //piping 
    readstream.pipe(response)

    
})

//server listening to port 3000
server.listen((3000), function() {
    console.log("server is running")
})






