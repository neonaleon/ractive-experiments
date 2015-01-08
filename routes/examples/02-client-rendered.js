var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var Ractive = require('ractive');

router.get('/', function(req, res) {

  fs.readFile(path.join(__dirname, '../../templates/examples/02-client-rendered.ractive'), { encoding: 'utf-8' }, function(err, template){

    var page = new Ractive({
      template: Ractive.parse(template, { interpolate: { script: false } }),
      data: {
        title: 'Client Rendered'
      }
    });

    res.status(200).send(page.toHTML());
  });
});

module.exports = router;