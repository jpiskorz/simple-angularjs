var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
 
gulp.task('default', function () {
  return gulp.src('app/templates/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('app'));
});
