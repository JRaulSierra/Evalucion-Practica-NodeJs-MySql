//import modules
const express = require("express");
const { router } = require('./routes')
const cors = require('cors')
const morgan = require('morgan')



//Puerto de ejecución
const PORT = process.env.PORT || 3001;


//express server
const app = express();

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


//Routes
app.use(router)


//Base del proyecto, routes y demas estara en app.js
function main() {
  app.listen(PORT);
  console.log(`http://localhost:${PORT}`);
}

main();
