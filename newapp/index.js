var http = require('http');

http.createServer((request,response)=>{
                        console.log("Server is Running!!!");
                        response.write("Hi!!! Node");
                        response.end();
                    }).listen(4000);