var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var Ractive = require('ractive');

router.get('/', function(req, res) {
  /**
   * Server Rendered
   * 1. read the template,
   * 2. bind data from some model,
   * 3. send the html
   */
  fs.readFile(path.join(__dirname, '../../templates/examples/01-server-rendered.ractive'), { encoding: 'utf-8' }, function(err, template){

    var page = new Ractive({
      template: Ractive.parse(template, { interpolate: { script: false, style: false } }), // stop ractive from parsing through script tags https://github.com/ractivejs/ractive/issues/1050
      data: {
        title: 'Server Rendered',
        hello: 'こんにちは',
        world: '世界'
      }
    });

    res.status(200).send(page.toHTML());
  });
});

module.exports = router;