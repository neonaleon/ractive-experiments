/**
 * (!)
 * This part of the code is almost exactly the same as
 * the code in routes/examples/02-server-render-client-rerender.js
 * with the exception that the template is copied into here as a string.
 */
var ractive = new Ractive({
  el: '#content',
  template: '<h2>Input</h2><input type="text" placeholder="{{placeholder}}" value="{{value}}"><h2>Output</h2><div>{{value}}</div>',
  data: {
    title: 'Server Rendered, Client Rerender',
    placeholder: 'Try typing something here!',
    value: ''
  }
});