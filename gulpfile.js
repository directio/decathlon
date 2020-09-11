//一、导入模块
let gulp = require('gulp');
let concat = require('gulp-concat');
let htmlmin = require('gulp-htmlmin');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');
let sass = require('gulp-sass');

//二、发布任务
//优化js任务
// function fnJS(){
//     return gulp.src('./src/js/*.js')
//         .pipe(babel({
//             presets: ['@babel/env']
//         }))
//         .pipe(uglify())
//         .pipe(rename({suffix : '.min'}))
//         .pipe(gulp.dest('./dist/js'));
// }

//优化css
function fnSass(){
    return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
}
//优化html
function fnHtml(){
    return gulp.src('./src/pages/*.html')
        .pipe(gulp.dest('./dist/pages'));
}

//优化图片
function fnImg(){
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}
//复制index.html
function fnCopyIndex(){
    return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist/'));
}

//监听任务
function fnWatch(){
    // gulp.watch('./src/js/*.js',fnJS);
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/pages/*.html',fnHtml);
}

//三、导出任务
// exports.js = fnJS;
exports.sass = fnSass;
exports.img = fnImg;
exports.copyIndex = fnCopyIndex;
exports.html = fnHtml;
exports.default = fnWatch;