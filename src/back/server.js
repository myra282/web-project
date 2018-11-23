// Import modules
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let express = require('express')

// Initialize the app
let app = express();
let port = process.env.PORT || 8080;

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
   extended: true
}));
app.use(bodyParser.json());

// Send message for default URL
app.get('/', (req, res) => res.send('Hello World with Express'));

// Import routes
let apiRoutes = require("./api-routes");
 
// Use Api routes in the App
app.use('/api', apiRoutes)

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running RestHub on port " + port);
});

// Connect to Mongoose and set connection variable
mongoose.connect('mongodb://localhost/resthub', {useNewUrlParser : true});
var db = mongoose.connection;
