var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gzip = require('gulp-gzip'),
    fs = require('fs'),
    prettyBytes = require('pretty-bytes');

const PLUGIN_NAME = 'gulp-twitter-data';

// Return a string containing file size and unit e.g 1 kB
function getFileSize(file,cb) {
  fs.stat(file, function (err, stats) {
    console.log(prettyBytes(stats.size));
    return cb(prettyBytes(stats.size));
  });
}

// Return true if file size is larger than maxSize, otherwise false
function compareFileSize(file,maxSize,cb) {

  var units = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"  ];
  getFileSize(file,function(size){

    var fileUnit = size.split(" ");
    var maxUnit = maxSize.split(" ");

    if(units.indexOf(fileUnit[1]) < units.indexOf(maxUnit[1])) {
      return cb(0);
    }
    else if(units.indexOf(fileUnit[1]) === units.indexOf(maxUnit[1]) && fileUnit[0] <= maxUnit[0]) {
      return cb(0);
    }
    else{
      return cb(1);
    }
  });

}

module.exports = function(file,maxSize)
{

  compareFileSize(file,maxSize,function(res){
    return res;
  });

};