var request = require('superagent');
var router = require('page');

var Post = require('../../shared/components/Post');
var PostList = require('../../shared/components/PostList');

function fetchPosts(){
  return Ractive.Promise(function(resolve, reject){
    request
      .get('/examples/05-mixed-rendered/posts')
      .set('Accept', 'application/json')
      .end(function(res){
        if (res.ok){
          resolve(res.body);
        } else {
          reject(res);
        }
      });
  });
};

var page = new Ractive({
  el: '#container',
  template: '<PostList/>',
  components: {
    PostList: PostList,
  },
  data: {
    posts: []
  },
  oninit: function(){
    var self = this, i = 1, intervalId;
    intervalId = setInterval(function(){
      self.fetchPosts().then(function(posts){
        if (self.get('posts')){
          self.set('posts', self.get('posts').concat(posts));
        } else {
          self.set('posts', posts);
        }
      });
      console.log('poll posts ' + i++);
    }, 1000);

    this.on({
      teardown: function(){
        clearInterval(intervalId);
      }
    })
  },
  fetchPosts: fetchPosts
});