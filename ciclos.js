for(let i = 1; i <= 10; i ++){
    console.log(i);
    if (i == 5){
        break;
    }
}
/* continue salta una iteracion */
for(let i = 1; i <= 10; i ++){
    if(i % 2 == 0) continue;
    console.log(i);
}

let i = 1;
while (i <= 10){
    i ++;
    console.log(i);
}


do{
    i ++;
    console.log(i);
}while (i <= 10)
