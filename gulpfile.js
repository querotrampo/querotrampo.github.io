var gulp = require('gulp'),
	sass = require('gulp-ruby-sass');


gulp.task('sass', () =>
    sass('assets/scss/style.scss')
        .on('error', sass.logError)
        .pipe(gulp.dest('style'))
);

gulp.watch('assets/scss/*.scss', ['sass']);