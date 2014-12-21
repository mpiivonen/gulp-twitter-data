var gulp = require('gulp');
var stream = require('./index.js');

gulp.task('default', function () {
  var file = "./testfile.json";
  stream.init(file);
});
