var gulp = require('gulp');
var fileTracker = require('./index.js');

var file = 'testfile.log',
    maxSize = '50 B',
    location = './';

gulp.task('default', function () {
  fileTracker(file,maxSize,location);
});
