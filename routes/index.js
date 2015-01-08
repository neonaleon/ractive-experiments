var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var Ractive = require('ractive');

var exampleFiles = fs.readdirSync(path.join(__dirname, 'examples'));

var exampleNames = exampleFiles.map(function(filename){
  return path.basename(filename, '.js');
});

exampleNames.forEach(function(name){
  router.use('/examples/' + name, require('./examples/' + name));
});

router.get('/', function(req, res) {
  fs.readFile(path.join(__dirname, '../templates/index.ractive'), { encoding: 'utf-8' }, function(err, template){

    var page = new Ractive({
      template: template,
      data: {
       examples: exampleNames.map(function(name){ return { name: name, link: '/examples/' + name } })
      }
    });

    res.status(200).send(page.toHTML());
  });
});

module.exports = router;