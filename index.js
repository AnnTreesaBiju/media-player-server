// import json-server
const jsonserver = require("json-server")
// create json-server using json-server library :- using create
const mediaPlayerServer= jsonserver.create()
// set up path/route for db.json flie
const router= jsonserver.router("db.json")

// return middleware used by jsson
const middleware =jsonserver.defaults()

// set up port number
const port = 4000 || process.env.PORT

// use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// server should listen for requset from front end
mediaPlayerServer.listen(port,()=>{
    console.log(`Media player Application started at ${port} and waiting for reduesqt!!`);
})