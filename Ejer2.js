/* recibir dos numeros usando promt y sumarlos, restarlos, dividirlos y multiplicarlos */

let numero1 = parseInt( prompt('Ingrese un número: '));
let numero2 = parseInt(prompt('Ingrese otro número: '));

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let dividir = numero1/ numero2;
console.log('La suma de ambos es: '+ suma);
console.log('La resta de ambos es: '+ resta);
console.log('La multiplicación de ambos es: '+ multiplicacion);
console.log('La division de ambos es: ' + dividir);
