class Usuario{
    constructor(nombre){ this.nombre = nombre;}
    get name(){
        return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1);
    }
}

let user = new Usuario ('Uriel');

console.log(user.name);

