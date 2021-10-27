//import modules
const express = require("express");
const { router } = require('./routes')

//Puerto de ejecución
const PORT = process.env.PORT || 3001;


//express server
const app = express();










//Routes
app.use(router)


//Base del proyecto, routes y demas estara en app.js
function main() {
  app.listen(PORT);
  console.log(`http://localhost:${PORT}`);
}

main();
