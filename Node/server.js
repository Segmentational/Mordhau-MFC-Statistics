/* server.js
 * Author: Ethan Seligman
 * Version 1.0
 */

// Modules -
const express = require("express") // for routing
const app = express() // initialize express
const config = require("./config/config.js") // load in config object
const bodyParser = require('body-parser') // for parsing requests in json or urlencoded
const chalk = require('chalk') // for console color formatting
const path = require('path');

// For console color formatting -
const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const success = chalk.bgHex('#6AFC91').hex("#000000")

// Middleware -
var urlencodedParser = bodyParser.urlencoded({ extended: false }) // form-urlencoded parser

// Views engine -
app.set('views', path.join(__dirname, 'views')); // set view path
app.set('view engine', 'pug'); // set view engine (pug)
app.use(express.static('views')) // set views folder for static file retrieval

// Routing (using no front end render engine yet) -
/* Endpoint to display the data on front-end of browser
 * url = http://localhost:3000/
 */
app.get("/", (req, res) => {
    // render in index.pug
    res.render('index', {
        msg: "Hello"
    })
})

/* API endpoint to receive POST requests for each match
 * type = .csv, .txt, .json, etc
 * match = an integer for that match's number
 * api_token = for validation and stronger security >:)
 */
app.post("/API/Export", urlencodedParser, (req, res) => {
    const { type, match, api_token } = req.body
})

// Listen on port specified in 'config.js'
app.listen(config.PORT, () => console.log(success(`Server is now running on localhost:${config.PORT}`)))