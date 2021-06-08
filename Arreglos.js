let arreglo = [1,34,19,28,10];

for(let  i = 0; i < arreglo.length; i ++){
    console.log(arreglo[i]);

}

let arregloo = ['ruby', 'python', 'java', 'javaScript'];



arregloo.forEach(element => {
    console.log(element);
});

// eliminar ruby. 
/* filter = se pasa un funcion y se ejecuta la funcion a cada elemento del arreglo, si el elemento es verdadero 
se añade a un nuevo arreglo, si es falso se descarta del nuevo arreglo 
retorna el neuvo arreglo generado */

arregloo = arregloo.filter(function(el) {
    return el != 'ruby';
})

arregloo.forEach(element => {
    console.log(element);
});

// eliminar java con flecha

arregloo = arregloo.filter((el) => el != 'java'
);

arregloo.forEach(element => {
    console.log(element);
});



//map

let numeros = [2,35,6,20];

let cuadrados = numeros.map(num => num * num);

console.log(cuadrados);