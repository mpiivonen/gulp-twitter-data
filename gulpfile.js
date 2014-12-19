var gulp = require('gulp');
var stream = require('./index.js');

var file = 'testfile.log',
    maxSize = '50 kB',
    location = './';
gulp.task('default', function () {
  stream();
});
