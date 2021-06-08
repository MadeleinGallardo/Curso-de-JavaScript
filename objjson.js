//json

let curso = {
    titulo: 'Curso Profesional de Javascript',
    duracion: 2.2,
    bloque: ['intro', 'funciones'],
    inscribir: function(usuario) {
        console.log(usuario + 'ahora esta inscripto');
    }
}

console.log(curso.titulo);
console.log(curso['titulo']);
curso.inscribir('Madelein ');

// Cambiar el titulo

curso.titulo = 'Curso de Javascript';

console.log(curso.titulo);

// modificar la funcion 

curso['inscribir'] = function(){};