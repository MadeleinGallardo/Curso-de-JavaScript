function executor (funcion) {
    funcion();
        
    
}

let tutor = {
    nombre: 'Uriel',
    apellido: 'Hernandez',
    nombreCompleto: function () {
        console.log(this.nombre + '' + this.apellido);
        
    }
}

executor(tutor.nombreCompleto.bind(tutor));