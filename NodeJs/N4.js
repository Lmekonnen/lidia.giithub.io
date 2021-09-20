exports.add= function(req,res,vals){
    var sum=parseInt(vals.fisrt)+parseInt(vals.second);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<!DOCTYPE html>");
    res.write("<html lang='en'>");
    res.write('<head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>');
    res.write('<title>Simple Adder</title>');
    res.write('</head>');
    res.write('<body>');
    res.write('<p>The sum is : ');
    res.write(String(sum));
    res.write('</p>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
};