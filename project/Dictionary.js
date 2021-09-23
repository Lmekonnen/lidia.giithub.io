var http = require('http');
var url = require('url');
var fs = require('fs');
var express = require('express');
var cors = require('cors');
const mysql = require('mysql');
var word=require('./word.js');
const app = express();

var conn = mysql.createConnection({
  host:"localhost",
  user: "root",
  password: "root"
});

conn.connect(function(err){
  if(err) throw err;
  else  console.log("database connection successfull.");
});

app.use(cors(
  {
    origin: '*'
  }
));

app.get('/', function(req, res){
  let serarchkeyword = req.query.wordSearch;
  var sql = 'SELECT * FROM entries.entries WHERE word = ' + mysql.escape(serarchkeyword);
  conn.query(sql, (err, result) => {
    if (err) throw error;
    res.json(result);
});
});

app.listen(3000, () => {
  console.log('server started on port 3000');
});

