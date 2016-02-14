var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./*.scss', ['sass']);
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        open: false,
        reloadOnRestart: true,
        files: ["index.html", "app.js", "data.json", "style.scss"]

    });
});
gulp.task('default', ['sass', 'browser-sync', 'sass:watch']);
