/* imprimir la sucesion de fibinacci el numero de veces indicado por el usuario*/

let veces = parseInt(prompt('Ingrese las veces que desea imprimir la serie: '));
let fibo_ant_ant = 1;
let fibo_ant = 1;

if (veces <= 2){
    console.log(1);
    console.log(1);
}else{
    console.log(1);
    console.log(1);
    for (let i = 1; i <= veces - 2; i ++){

        fibo = fibo_ant + fibo_ant_ant;
        console.log(fibo);
        fibo_ant_ant = fibo_ant;
        fibo_ant = fibo;
    
    }
}
