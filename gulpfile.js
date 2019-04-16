const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const webserver = require('gulp-webserver');
gulp.task('devSass', () => {
    return gulp.src('./bulic/scss/*.scss')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(concat('all.css'))
        .pipe(minCss())
        .pipe(gulp.dest('./bulic/css'))
        .pipe(gulp.dest('./dist/css'))
})
gulp.task("devHtml", () => {
    return gulp.src("./bulic/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest("./dist"))
})

gulp.task("watch", () => {
    gulp.watch("./bulic/css/*.css", gulp.series("devSass"))

    gulp.watch("./bulicc/*.html", gulp.series("devHtml"))
})

gulp.task("serverStatic", () => {
    return gulp.src("./bulic")
        .pipe(webserver({
            port: 8000,
            open: true,
            livereload: true
        }))
})
gulp.task("default", gulp.parallel("watch", "serverStatic"))