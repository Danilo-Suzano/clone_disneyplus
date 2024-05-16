const gulp = require('gulp'); // importando o gulp
const sass = require('gulp-sass')(require('sass')); //importando o sass

function styles(){
    return gulp.src('./src/styles/*.scss') //recuperar os arquivos com as extensões ".scss"
    .pipe(sass({outputStyle: 'compressed'})) //compilação do sass (para estilos de saída do css serem comprimidos)
    .pipe(gulp.dest('./dist/css')); //enviar estes arquivos já comprimidos para a pasta de destino
}

exports.default = styles; //executar a tarefa
exports.watch =  function(){ //função para aobservar nos arquivos mencionados abaixo, e dentro do array as funções 
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
}