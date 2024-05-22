const gulp = require('gulp'); // importando o gulp
const sass = require('gulp-sass')(require('sass')); //importando o sass
const imagemin = require('gulp-imagemin'); //importando o gulp-imagemin
const uglify = require('gulp-uglify'); //importando o gulp-uglify

function scripts(){
    return gulp.src('./src/scripts/*.js') //recuperar os arquivos com as extensões ".js"
   .pipe(uglify()) //chamando a função de minificação
   .pipe(gulp.dest('./dist/js')); //enviar estes arquivos já comprimidos para a pasta de destino
}

function styles(){
    return gulp.src('./src/styles/*.scss') //recuperar os arquivos com as extensões ".scss"
    .pipe(sass({outputStyle: 'compressed'})) //compilação do sass (para estilos de saída do css serem comprimidos)
    .pipe(gulp.dest('./dist/css')); //enviar estes arquivos já comprimidos para a pasta de destino
}
function images(){
    return gulp.src('./src/images/**/*', { encoding: false } ) //recuperar as imagens e arquivos com imagens dentro dessas pastas
    .pipe(imagemin()) //chamando a função de minificação
    .pipe(gulp.dest('./dist/images')); //enviar estes arquivos já comprimidos para a pasta de destino
}


exports.default = gulp.parallel(styles, images, scripts); //executar a tarefa
exports.watch = function(){ //função para aobservar nos arquivos mencionados abaixo, e dentro do array as funções 
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}