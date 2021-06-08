/*Juego número mágico*/

let magico = 23;

let numero = parseInt(prompt('Ingrese el número mágico'));
if (numero == magico) console.log('GANASTE!! ADIVINASTE EL NUMERO MAGICO');


while (numero != magico){
    if (numero > magico){
        console.log('El número mágico es menor');
        let numero = parseInt(prompt('Ingrese el número mágico'));
    } else if (numero < magico){
        console.log('El número mágico es mayor');
        let numero = parseInt(prompt('Ingrese el número mágico'));
    } else {
        console.log('GANASTE!! ADIVINASTE EL NUMERO MAGICO');
        
        break;
    }
}