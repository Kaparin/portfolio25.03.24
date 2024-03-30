const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const fs = require('fs');
const xml2js = require('xml2js');
const tap = require('gulp-tap');

// Конфигурация
const config = {
    mode: {
        symbol: { // задаём Symbol mode
            inline: true, // делаем svg инлайновым
            sprite: "sprite.svg", // имя файла спрайта
        }
    }
};

gulp.task('svg-sprite', function () {
    return gulp.src('F:\\Work_Space\\portfolio25.03.24\\src\\components\\icons\\*.svg') // указываем путь к SVG файлам
        .pipe(svgSprite(config))
        .pipe(gulp.dest('F:\\Work_Space\\portfolio25.03.24\\src\\assets')) // указываем путь, куда сохраняем спрайт
        .pipe(tap(function(file) {
            if (file.path.endsWith('sprite.svg')) {
                createIconMap(file.path);
            }
        }));
});

function createIconMap(path) {
    fs.readFile(path, 'utf8', function(error, data) {
        if(error) {
            throw error;
        }
        xml2js.parseString(data, function(err, result) {
            const symbols = result.svg.symbol;
            const iconNames = symbols.map(symbol => symbol.$.id);
            fs.appendFile('./src/icon-map.txt', '\n' + iconNames.join('\n'), function(err) {
                if (err) {
                    throw err;
                }
            });
        });
    });
}