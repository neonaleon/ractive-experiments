var fs = require('fs');
var path = require('path');
var Ractive = require('ractive');

var template = fs.readFileSync(path.join(__dirname, '../templates/components/news-list.ractive'), { encoding: 'utf-8' });

var NewsList = Ractive.extend({
    template: template
});

module.exports = NewsList;