gulp-twitter-data
=================

This plugin watch changes in selected file.
Once the specific file size has been met, the file
will be copied over and the original file will be cleared.

Quite handy tool to keep track of different logs your program may generate

This plugin doesn't stream data from twitter stream. Streaming should be handled
elsewhere and this plugin just keep eye on file size.

Syntax
-------
Syntax
```javascript
fileTracker(file,maxSize,location);
```
**file**

File to keep eye on.

**maxSize**

Max file size by using pretty-bytes type of value, as an example '50 B'.

Available units are ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

**location**

Location where to files are stored. Each new file will be named as
file + '.'+running number

There's no max number of files.

Example
-------

```javascript
var gulp = require('gulp');
var fileTracker = require('./index.js');

var file = 'testfile.log',
maxSize = '50 B',
location = './';

gulp.task('default', function () {
  fileTracker(file,maxSize,location);
});

gulp.task('watch', function() {
  fileTracker(file,maxSize,location);
});
```
