var gulp = require('gulp');
var fileTracker = require('./index.js');

/*
gulp.task('default', function()
{
  fileTracker();
});
*/

gulp.task('default', function () {
  fileTracker('index.js', '2 kB');
});
