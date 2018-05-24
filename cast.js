//Dependencies
var express = require("express");
var mysql = requrie("mysql");

//Instance of express app
var app = express();

//Set up the port (Heroku)
var PORT = process.env.PORT || 8080;

//MySQL connection
var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password: "",
    database: "friends_db"
});

//Initiate MySQL Connection
connection.connect(function(err){
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection. threadId);
});

// Create a /attitude-chart/:att route that will display all the actors for a specific type of attitude.


// Routes
// a /cast route displays the characters and their data by id's
app.get("/cast", function(req, res) {
  connection.query("SELECT * FROM characters_table order by id", function(err, result) {
    var html = "<h1>Characters Ordered BY ID</h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p>Attitude: " + result[i].attitude + "</p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

// a /coolness-chart route that will display all the actors and their data ordered by their coolness points.
app.get("/coolness-chart", function(err, res){
    connection.query("SELECT * FROM  friends_db order by coolness_points DES", function (err, result){
    var html = "<h1>Characters by Coolness</h1>";
    html += "<ul>";
    for (i = 0; i < result.length; i++){
    html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p> Name: " + result[i].name + "</p>";
      html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
      html += "<p>Attitude: " + result[i].attitude + "</p></li>";
    }
    html += "<ul>";
    res.send(html);    
});
});

// Create a /attitude-chart/:att route that will display all the actors for a specific type of attitude.
app.get("/attitude-chart/:att", function(req, res){
    connection.query("SELECT * FROM characters_table WHERE attitude = ?", [req.params.att], function(err, result){
        var html = "<h1>Characters by Attitude" + req.params.att + "</h1>";
        html += "<ul>";
        for (i = 0; i < result.length; i++){
            html += "<li><p> ID: " + result[i].id + "</p>";
              html += "<p> Name: " + result[i].name + "</p>";
              html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
              html += "<p>Attitude: " + result[i].attitude + "</p></li>";
            }
            html += "<ul>";
            res.send(html);
    });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
