var express = require('express');
var router = express.Router();

var Ractive = require('ractive');

router.get('/', function(req, res) {
  /**
   * Components
   * Encapsulate behavior and markup in reusable components
   * Making components makes it easy to use the same code on server and client,
   * as well as reusing them in different places.
   */
  var page = new Ractive({
    template: require('../../parsed/examples/04-components'),
    data: {
      title: 'Components'
    },
  });

  res.status(200).send(page.toHTML());
});

module.exports = router;