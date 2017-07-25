var gulp = require('gulp'); // 合并，压缩文件
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minifyCSS = require('gulp-minify-css');
var connect = require('gulp-connect');
var uglify = require('gulp-uglify');

gulp.task('default', function() {
    // 源
    gulp.src('./src/static/js/index.js')
        // .pipe(plumber())
        // .pipe(concat('all.js'))
        // 发布路径
        .pipe(gulp.dest('./dist/static/js/'));
    // .pipe(rename('all.min.js'))
    // .pipe(uglify())
    // .pipe(gulp.dest('./app/static/js'))
    // .pipe(connect.reload());
});


gulp.task('css', function() {
    gulp.src('./src/static/css/*.css')
        .pipe(plumber()) //表示有错误的话 终止执行
        .pipe(concat('all.css'))
        .pipe(gulp.dest('./dist/static/css'))
        .pipe(rename('all.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/static/css'))
        .pipe(connect.reload()); //实时监听
});
gulp.task('html', function() {
    gulp.src('./src/static/html/*.html')
        .pipe(plumber())
        .pipe(gulp.dest('./dist/static/html'))
        .pipe(connect.reload()); //实时加载
});

// gulp.task('watch', function() {
//     gulp.watch(['.c/staticml/*.html'], ['html']);
// });
gulp.task('connect', function() {
    connect.server({
        root: 'dist',
        port: 8001,
        livereload: true
    });
});


gulp.task('watch', function() {
    gulp.watch(['./src/static/html/*.html'],['html']);
    gulp.watch(['./src/static/css/*.css'],['css']);
    gulp.watch(['./src/static/js/*.script'],['script']);
    //  监听的那个目录     反应的文件
});
gulp.task('default', ['connect','css' ,'watch', 'html']);
