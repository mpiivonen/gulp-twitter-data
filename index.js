var gulp = require('gulp'),
    watch = require('gulp-watch'),
    gzip = require('gulp-gzip'),
    fs = require('fs'),
    fse = require('fs.extra'),
    prettyBytes = require('pretty-bytes');

const PLUGIN_NAME = 'gulp-twitter-data';

// Return a string containing file size and unit e.g 1 kB
function getFileSize(file,cb) {
  fs.stat(file, function (err, stats) {

    return cb(prettyBytes(stats.size));
  });
}

// Return true if file size is larger than maxSize, otherwise false
function compareFileSize(file,maxSize,cb) {

  var units = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"  ];
  getFileSize(file,function(size){

    var fileUnit = size.split(" ");
    var maxUnit = maxSize.split(" ");
    console.log(fileUnit);
    console.log(maxUnit);

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

module.exports = function(file,maxSize,newLocation)
{

  var logNumber = 1;
  fs.watchFile(file, function (cb) {
    console.log("File size changed");
    compareFileSize(file,maxSize,function(res){
      if(res){
        console.log("File size exceeded");
        fse.copy(file, newLocation+file+'.'+logNumber, function (err) {
          if (err) {
            throw err;
          }
          logNumber++;
          console.log('Copied foo.txt to bar.txt');
          fs.truncate(file, 0, function(){console.log('done')})
        });
      }
      else {
        console.log("File size under desired size");
      }
      //return res;
    });
  });


};
