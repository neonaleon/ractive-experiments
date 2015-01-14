var Ractive = require('ractive');
var Post = require('./Post');

var PostList = Ractive.extend({
  template: require('../../parsed/components/PostList'),
  components: {
    Post: Post
  }
});

module.exports = PostList;