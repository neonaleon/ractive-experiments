var express = require('express');
var router = express.Router();

var Ractive = require('ractive');

router.get('/posts', function(req, res){
  // fixture
  var POSTS = [
    {
      author: 'Leon',
      title: 'CSS Processing',
      text: 'CSS Processing is very useful...'
    },
    {
      author: 'Zealot',
      title: 'Oath',
      text: 'My wife for Aiur!'
    }
  ];

  setTimeout(function(){
    res.send(POSTS);
  }, 300);
})

router.get('/', function(req, res) {
  /**
   * Mixed Rendered
   * 1. Render static template using Ractive server side.
   * 2. Specify containers for Ractive client side.
   */

  var page = new Ractive({
    template: require('../../parsed/examples/05-mixed-rendered'),
    data: {
      title: 'Mixed Rendered',
      static1: "Here's some static content!",
      static2: "Another piece of static content"
    }
  });

  res.status(200).send(page.toHTML());
});

module.exports = router;