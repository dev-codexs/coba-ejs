var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extend:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

var myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
app.use(myLogger)

app.get('/', function (req, res) {
    var name = 'EJS';
    res.render(__dirname + "/main.html", {name:name, node: 'Node JS'});
})
app.get('/main', function(req, res) {
  var name = 'hello';
  res.render(__dirname + "/main.html", {name:name, node: 'Node JS'});
});

app.listen(3000)