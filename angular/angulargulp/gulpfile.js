var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var plumber = require('gulp-plumber');
var connect = require('gulp-connect');
var open = require('open');

//定义路径
var app = {
    devPath: 'bulid/',
    distPath: 'dist/',
    srcPath: 'src/'
}

gulp.task('bundle', function() {
    gulp.src(['./src/script/app.js', './src/script/route.js'])
        .pipe($.plumber())
        .pipe($.concat('bundle.js'))
        .pipe(gulp.dest(app.devPath + 'static/js'))
        .pipe($.rename('bundle.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.distPath + 'static/js'))
})

gulp.task('script', function() {
    gulp.src('./src/script/**/*.js')
        .pipe($.plumber())
        .pipe($.concat('all.js'))
        .pipe(gulp.dest(app.devPath + 'static/js'))
        .pipe($.rename('all.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(app.distPath + 'static/js'))
})




gulp.task('template', function() {
    gulp.src('./src/view/**/*.html')
        .pipe($.plumber())
        .pipe(gulp.dest(app.devPath + 'view'))
        .pipe(gulp.dest(app.distPath + 'view'))
})


gulp.task('data', function() {
    gulp.src('./src/data/*.json')
        .pipe($.plumber())
        .pipe(gulp.dest(app.devPath + 'data'))
        .pipe(gulp.dest(app.distPath + 'data'))
})


gulp.task('default', function() {
    gulp.run('dist', 'watch');
})

gulp.task('watch', function() {
    gulp.watch('./src/script/**/*.js', ['script']);
    gulp.watch('./src/data/*.json', ['data']);
    gulp.watch('./view/**/*.html', ['template']);
})

gulp.task('serve', function() {
    connect.server({
        root: [app.devPath],
        livereload: true,
        port: 8083
    });
    open("http://localhost:8083");
})

gulp.task('dev', [
    'serve',
    'script',
    'template',
    'data',
    'bundle'
])

gulp.task('dist', [
    'script',
    'template',
    'data'
])
