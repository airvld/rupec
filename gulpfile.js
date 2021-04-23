// * Команды *
// "gulp" - запуск gulp.
// "gulp min" - сжатие js, css (создает минимизированные файлы script.min.js и style.min.css).
// "gulp mg" - группировка всех медиазапросов в кучу.

// * Настройки *
const preprocessor        = 'scss', // Выбрать препроцессор для стилей (scss или less)
      gulpVersion         = '4'; // Версия галпа (3 или 4)

// * Пути к папкам относительно корня проекта *
const scssPath            = 'scss', // Scss
      lessPath            = 'less', // Less
      cssPath             = 'dist/css', // Css
      pugPath             = 'jade', // Pug
      htmlPath            = 'dist', // Html
      jsAppPath           = 'js-app', // Js до сборки
      jsPath              = 'dist/js'; // Js после сборки



// Код
const gulp                = require('gulp'),
      sass                = require('gulp-sass'),
      less                = require('gulp-less'),
      concatJS            = require('gulp-concat'),
      pug                 = require('gulp-pug'),
      autoprefixer        = require('gulp-autoprefixer'),
      cleanCSS            = require('gulp-clean-css'),
      rigger              = require('gulp-rigger'),
      browserSync         = require('browser-sync'),
      uglify              = require('gulp-uglify'),
      rename              = require("gulp-rename"),
      gcmq                = require('gulp-group-css-media-queries');

gulp.task('jade', function buildHTML() {
  return gulp.src( pugPath + '/*.jade')
    .pipe(pug({
      pretty: '\t'
    }))
    .pipe(gulp.dest( htmlPath ))
    .pipe(browserSync.reload({stream:true}));
});

if (preprocessor == 'scss') {
  gulp.task('style', function () {
    return gulp.src( scssPath + '/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest( cssPath ))
    .pipe(browserSync.reload({stream:true}));
  });
}

else if (preprocessor == 'less') {
  gulp.task('style', function () {
    return gulp.src( lessPath + '/*.less')
    .pipe(less())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest( cssPath ))
    .pipe(browserSync.reload({stream:true}));
  });
}

gulp.task('js', function () {
    return gulp.src( jsAppPath + '/scripts.js')
    .pipe(rigger())
    .pipe(gulp.dest( jsPath ))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: htmlPath
        },
        notify: true
    });
});

gulp.task('css-min', function () {
  return gulp.src( cssPath + '/style.css')
  .pipe(cleanCSS({
    level : 2
  }))
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest( cssPath ))
  .pipe(browserSync.reload({stream: true}));
});

gulp.task('js-min', function () {
    return gulp.src( jsPath + '/scripts.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest( jsPath ))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('media-group', function () {
    return gulp.src( cssPath + '/style.css')
    .pipe(gcmq())
    .pipe(gulp.dest( cssPath ))
    .pipe(browserSync.reload({stream: true}));
});

if (gulpVersion == '3') {
  gulp.task('watch', function () {
    gulp.watch('jade/**/*.jade', ['jade']);
    gulp.watch('js-app/**/*.js', ['js']);
    gulp.watch('scss/**/*.scss', ['style']);
  });

  gulp.task('default', ['browser-sync', 'jade', 'js', 'style', 'watch']);

  gulp.task('minify', ['css-min', 'js-min']);

  gulp.task('mg', ['media-group']);
}
else if (gulpVersion == '4') {
  gulp.task('watch', function () {
    gulp.watch('jade/**/*.jade', gulp.parallel('jade'));
    gulp.watch('js-app/**/*.js', gulp.parallel('js'));
    gulp.watch('scss/**/*.scss', gulp.parallel('style'));
  });

  gulp.task('default', gulp.parallel('browser-sync', 'jade', 'js', 'style', 'watch'));

  gulp.task('min', gulp.parallel('css-min', 'js-min'));

  gulp.task('mg', gulp.parallel('media-group'));
}