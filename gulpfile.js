const gulp         = require('gulp'), // Подключаем Gulp
      sass         = require('gulp-sass'), //Подключаем Sass пакет,
      browserSync  = require('browser-sync'), // Подключаем Browser Sync
//    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
//    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
//    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
//    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
//    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
//    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
      autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
gulp.task('sass', function() { // Создаем таск Sass
    return gulp.src('app/sass/**/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
gulp.task('code', function() {
    return gulp.src([
        'app/*.html', 
        'app/scripts/**/*.js'
    ])
    .pipe(browserSync.reload({ stream: true }))
});
//gulp.task('css-libs', function() {
//    return gulp.src('app/sass/**/*.sass')
//        .pipe(sass()) 
//        .pipe(cssnano())                                // Для Build
//        .pipe(rename({suffix: '.min'})) 
//        .pipe(gulp.dest('app/main')); 
// });
//gulp.task('clean', async function() {
//    return del.sync('dist');                          // Для Build
// });
//gulp.task('img', function() {
//    return gulp.src('app/images/**/*')
//        .pipe(cache(imagemin({
//         .pipe(imagemin({ 
//            interlaced: true,
//            progressive: true,                        // Для Build
//           svgoPlugins: [{removeViewBox: false}],
//            use: [pngquant()]
//        }))/**/)
//        .pipe(gulp.dest('dist/img')); 
//});
//gulp.task('prebuild', async function() {
//    var buildCss = gulp.src([ 
//        'app/main/**/*.css',
//        'app/css/libs.min.css'
//        ])                                            // Для Build
//    .pipe(gulp.dest('dist/css'))
//    var buildHtml = gulp.src('app/*.html') 
//  .pipe(gulp.dest('dist'));
//});
//gulp.task('clear', function (callback) {
//    return cache.clearAll();
// })
gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass')); // Наблюдение за sass файлами
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch('app/scripts/*.js', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
});
gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));
//gulp.task('build', gulp.parallel('prebuild', 'clean', 'img', 'sass')); // Для Build