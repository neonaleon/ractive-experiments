var Ractive = require('ractive');

var Post = Ractive.extend({
  template: require('../../parsed/components/Post'),
  oninit: function(){
    // init is called after this component is initialized
    // so we can use it to attach event handlers
    this.on('click', function(){
      alert('clicked on ' +  this.get('title'));
    });
  }
});

module.exports = Post;