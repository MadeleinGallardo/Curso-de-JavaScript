// el cosntructor inicializa el objeto puede tener un solo cosntructor
// permite listar los parametros
/* lo q hace diferente el constructor de un metodo tradicional es se ejecuta de forma
automatica cuanso creamos una nueva instancia de la clase usando
new */

class Curso {
    constructor(titulo, duracion, color = 'yellow'){
        this.titulo = titulo;
        this.duracion = duracion;
        this.aula = 2.2,
        this.color = color;

    }
}

new Curso ('Curso de Java', 2, );