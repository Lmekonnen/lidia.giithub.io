// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
//   }).listen(8080);

// var http = require('http');
// var dt = require('./test');
// exports.myDateTime = function () {
//     return Date();
//   };
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time is currently: " + dt.myDateTime());
//   res.end();
// }).listen(8080);

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

var http = require('http');
var url = require('url');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(8080);

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   fs.readFile('N4.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// var fs = require('fs');
// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// });

// var fs = require('fs');
// fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
//   if (err) throw err;
//   console.log('Replaced!');
// });

// var fs = require('fs');
// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });

// var fs = require('fs');
// fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'
// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'

// var http = require('http');
// var url = require('url');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   var q = url.parse(req.url, true);
//   var filename = "." + q.pathname;
//   fs.readFile(filename, function(err, data) {
//     if (err) {
//       res.writeHead(404, {'Content-Type': 'text/html'});
//       return res.end("404 Not Found");
//     } 
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);

// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);

// var fs = require('fs');
// var rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });

// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// //Create an event handler:
// var myEventHandler = function () {
//   console.log('I hear a scream!');
// }
// //Assign the event handler to an event:
// eventEmitter.on('scream', myEventHandler);
// //Fire the 'scream' event:
// eventEmitter.emit('scream');

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//   res.write('<input type="file" name="filetoupload"><br>');
//   res.write('<input type="submit">');
//   res.write('</form>');
//   return res.end();
// }).listen(8080);

// var http = require('http');
// var formidable = require('formidable');
// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       res.write('File uploaded');
//       res.end();
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = '/Users/m80007276/Desktop' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

// var nodemailer = require('nodemailer');
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'lidiamekonnen987@gmail.com',
//     pass: 'mekonnen987'
//   }
// });
// var mailOptions = {
//   from: 'lidiamekonnen987@gmail.com',
//   to: 'lmesfin@miu.edu,myotherfriend@yahoo.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!'
// };
// var mailOptions = {
//     from: 'youremail@gmail.com',
//     to: 'myfriend@yahoo.com',
//     subject: 'Sending Email using Node.js',
//     html: '<h1>Welcome</h1><p>That was easy!</p>'
//   };
// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });


var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb"
});
// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table altered");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "INSERT INTO customers (name, address) VALUES ?";
//   var values = [
//     ['John', 'Highway 71'],
//     ['Peter', 'Lowstreet 4'],
//     ['Amy', 'Apple st 652'],
//     ['Hannah', 'Mountain 21'],
//     ['Michael', 'Valley 345'],
//     ['Sandy', 'Ocean blvd 2'],
//     ['Betty', 'Green Grass 1'],
//     ['Richard', 'Sky st 331'],
//     ['Susan', 'One way 98'],
//     ['Vicky', 'Yellow Garden 2'],
//     ['Ben', 'Park Lane 38'],
//     ['William', 'Central st 954'],
//     ['Chuck', 'Main Road 989'],
//     ['Viola', 'Sideway 1633']
//   ];
  // con.query(sql, [values], function (err, result) {
//     if (err) throw err;
//     console.log("Number of records inserted: " + result.affectedRows);
//     console.log(result.affectedRows);
//     console.log(result.fieldCount);
//     console.log(result.insertId);
//     console.log(result.serverStatus);
//     console.log(result.warningCount);
//     console.log(result.message);
//     console.log(result.protocol41);
//     console.log(result.changedRows);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     console.log(result[2].address);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(fields);
//     console.log(fields[1].name);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address LIKE 'S%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
// con.query(sql, function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE address = ?';
// con.query(sql, [adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// var name = 'Amy';
// var adr = 'Mountain 21';
// var sql = 'SELECT * FROM customers WHERE name = ? OR address = ?';
// con.query(sql, [name, adr], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE customers";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table deleted");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DROP TABLE IF EXISTS customers";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result.affectedRows + " record(s) updated");
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "SELECT * FROM customers LIMIT 2, 5";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
// const express = require('express');
// const cookieParser = require("cookie-parser");
// const sessions = require('express-session');
// const oneDay = 1000 * 60 * 60 * 24;
// const app = express();
// const PORT = 4000;

// test.use(sessions({
//     secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
//     saveUninitialized:true,
//     cookie: { maxAge: oneDay },
//     resave: false 
// }));