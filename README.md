gulp-twitter-data
=================

This plugin watch changes in selected file.
Once the specific file size has been met, the file
will be copied over and the original file will be cleared.

Quite handy tool to keep track of different logs your program may generate

This plugin doesn't stream data from twitter stream. Streaming should be handled
elsewhere and this plugin just keep eye on file size.

Example
-------
Example usage
```javascript
var gulp = require('gulp');
var stream = require('./index.js');

gulp.task('default', function () {
  var file = "./testfile.json";
  stream.init(file);
});
```
**file**

File to store retrieved tweets and to keep eye on.

**How to configure Twitter api information and default file size.**

gulp-twitter-data requires https://github.com/mpiivonen/twitter-data npm module.
Twitter api information and default file size can be configured at "twitter-data/user-config.json".
To keep gulp plugin more convenient default file will be set via init function, instead of loading it from user-config.json.
