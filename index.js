var fs = require('fs'),
    fse = require('fs.extra'),
    prettyBytes = require('pretty-bytes'),
    twitter = require('twitter-data');

const PLUGIN_NAME = 'gulp-twitter-data';

module.exports = {

  init: function(file){
    twitter.initConfig();
    var writeStream = fs.createWriteStream(file, {'flags': 'a'});
    var client = twitter.createClient();
    twitter.saveStream(client,writeStream);
  }
};
