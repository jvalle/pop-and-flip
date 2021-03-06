var gulp = require('gulp');

gulp.task('stylus', function () {
    var stylus = require('gulp-stylus'),
        autoprefixer = require('gulp-autoprefixer');

    gulp.src('./styl/flip.styl')
        .pipe(stylus())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./build/css'));
});

gulp.task('js', function () {
    var uglify = require('gulp-uglify');

    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', ['default'], function () {
    gulp.watch('styl/**', ['stylus']);
    gulp.watch('js/**', ['js']);
});

gulp.task('default', ['stylus', 'js']);
