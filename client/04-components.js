var Ractive = require('ractive');

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
]

/**
 * Components
 * Create Ractive components using Ractive.extend
 */
var Post = Ractive.extend({
  template: require('../parsed/components/Post'),
  init: function(){ // called after this component is initialized
    this.on('click', function(){
      alert('clicked on ' +  this.get('title'));
    });
  }
});

var PostList = Ractive.extend({
  template: require('../parsed/components/PostList'),
  components: {
    Post: Post
  }
});

var ractive = new Ractive({
  el: '#container',
  template: '<PostList />',
  data: {
    posts: POSTS
  },
  components: {
    PostList: PostList
  }
});