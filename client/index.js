var router = require('page');
var Ractive = require('ractive');

router('/examples/05-mixed-rendered', function(){
  require('./examples/05-mixed-rendered');
  console.log('example 5');
});

router('/examples/temp', function(){
  console.log('example 5 temp');
  router('/examples/05-mixed-rendered');
});

router('/', function(){

});

router();