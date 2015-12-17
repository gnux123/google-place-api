var gulp = require('gulp'),
    del = require('del'),
    copy = require('gulp-copy'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    wait = require('gulp-wait'),
    watch = require('gulp-watch'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    styleguide = require('gulp-styledocco'),
    replace = require('gulp-replace'),
    plumber = require('gulp-plumber');

gulp.task('webserver', function () {
    connect.server({
        root: '',
        port: 9000,
        livereload: true
    });
});

gulp.task('livereload', function(){
    gulp.src(['*.html'])
            // .pipe(wait(800))
            .pipe(watch(['*.html']))
            .pipe(connect.reload());
});

gulp.task('watch',function(){
	gulp.watch(['*.html'],['livereload']);
});

gulp.task('server', ['webserver', 'watch']);
