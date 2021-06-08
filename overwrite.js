//tomar un metodo y reescribirlos
// super ejecuta el constructor de la clase de la q estamos heredando

class User {
    constructor(nombre){
        this.nombre = nombre;
    }
    
    saludar(){
        console.log('Hola ' + this.nombre);
    }
}

class Admind extends User{
   constructor(nombre){
       super(nombre);
   }
   
   
    saludar(){

        super.saludar(); /* llama el metodo del padre*/
        console.log('Aqui esta el panel de administración');
    }
}

let admin = new Admind('Madelein');

admin.saludar();
