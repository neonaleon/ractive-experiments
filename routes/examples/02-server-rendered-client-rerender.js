var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
var Ractive = require('ractive');

router.get('/', function(req, res) {
  /**
   * Server Rendered, Client Rerender
   * This part is same as 01-server-rendered,
   * see public/javascripts/02-server-rendered-client-rerender.js
   * for the client rerendering part.
   */
  fs.readFile(path.join(__dirname, '../../templates/examples/02-server-rendered-client-rerender.ractive'), { encoding: 'utf-8' }, function(err, template){

    /**
     * (!)
     * There is no DOM on server-side so the el option
     * passed to Ractive actually does nothing.
     * This is left here to demonstrate that the server-side
     * code can be the exactly the same as the client-side code,
     * and thus achieving isomorphic templating.
     *
     * Stay tuned to find out how to make the code shareable between
     * server and client.
     */
    var page = new Ractive({
      el: '#content',
      template: template,
      data: {
        title: 'Server Rendered, Client Rerender',
        placeholder: 'Try typing something here!',
        value: ''
      }
    });

    res.status(200).send(page.toHTML());
  });
});

module.exports = router;