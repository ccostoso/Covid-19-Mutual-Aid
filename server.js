const express = require("express");
const passport = require("./passport");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbConnection = require('./db');
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// )

console.log("I HAVE MADE IT PAST THE FIRST 2 MIDDLE WARE");

// app.use(bodyParser.json())
app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mutuaid");

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
