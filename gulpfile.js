var gulp = require('gulp');
var responsive = require('gulp-responsive-images');
 
gulp.task('default', function () {
  return gulp.src('src/**/*jpg')
    .pipe(responsive({
       '**/*.*': [{
        width: 200,
		suffix: '-200'
      },{
        width: 300,
		suffix: '-300'
      }, {
        width: 600,
		suffix: '-600'
      }, {
        width: 900,
		suffix: '-900'
      }, {
        width: 1200,
		suffix: '-1200'
      }]
    }))
    .pipe(gulp.dest('img'));
});