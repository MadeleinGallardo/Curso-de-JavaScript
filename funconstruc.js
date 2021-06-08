//fUNCIONES CONSTRUCTORAS
// mayuscula el nombre de las funciones cosntructoras

function Curso(){
    this.titulo = 'Curso Profesional de javaScript';
    this.inscribir = function(usuario){
        console.log(usuario + 'se ha inscripto');
    }
}

let cursoJavaScript = new Curso();

cursoJavaScript.inscribir('Madelein');

//Argumentos 

function Curso(titulo){
    this.titulo = titulo;
    this.inscribir = function(usuario){
        console.log(usuario + 'se ha inscripto');
    }
}

let cursoJavaScript2 = new Curso('Curso Profecional de JavaScript');

cursoJavaScript.inscribir('Madelein');