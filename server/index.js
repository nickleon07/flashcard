//loads express library from node modules
const express = require('express');
//const db = require('../db/index.js');
//const router = require(./router.js)

// instantiates a server using the express constructor
const app = express();

// sets global constant for servers port
const port = 3000

//helper function
// var logRequests = (req, res, next) => {
//   console.log(`Recieved a ${req.method} request to ${req.path}`)
//   //console.log(path.join(_dirname));
//   next();
// }

//middleware
//app.use(logRequests)
app.use(express.static('client/dist/'))



//route definitions

//starts server
app.listen(port, () => console.log(`server started at port ${port}`))
