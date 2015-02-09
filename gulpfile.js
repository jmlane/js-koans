var gulp = require('gulp');
var g6to5 = require('gulp-6to5');

gulp.task('6to5', function () {
  return gulp.src('src/**/*.js')
    .pipe(g6to5())
    .pipe(gulp.dest('gen'));
});