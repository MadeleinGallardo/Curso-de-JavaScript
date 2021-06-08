
// clase declaretion
class Curso{
    /* las propiedades se listan dentro de un construcctor*/
    constructor(titulo){
        this.titulo = titulo;

        
    }
    
    inscribir(usuario){
        console.log(usuario + ' se ha inscripto');
    }

}

let javaScriptCurso = new Curso('Curso Profesional de javaScript');
console.log(javaScriptCurso.titulo);
javaScriptCurso.inscribir('Madelein');

// class expretion
let Cursoo = class {}

let Usuario = class Usuario{}