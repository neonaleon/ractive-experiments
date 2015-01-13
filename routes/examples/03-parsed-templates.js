var express = require('express');
var router = express.Router();

var Ractive = require('ractive');

router.get('/', function(req, res) {
  /**
   * Preparsed Templates
   * We can use Ractive.parse to parse templates, and then use CommonJS style require
   * Using require also provides the benefit of caching, and opens the possibility of sharing templates using browserify
   * See tasks/ractive.js to see how they are being parsed
   */
  // The following code is same as 01-server-rendered, but uses require instead of fs.readFile
  var page = new Ractive({
    template: require('../../parsed/examples/03-parsed-templates'),
    data: {
      title: 'Parsed Templates',
      hello: 'こんにちは',
      world: '世界'
    }
  });

  res.status(200).send(page.toHTML());
});

module.exports = router;