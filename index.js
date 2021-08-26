console.log('hello world');
let arra =['salif', 'adama', 'sama',]
console.log(arra.length);
arra.forEach(element => {
    console.log(element)    

});
//increment
for (let i = 10; i < 60; i++){
    console.log(i);
}
//decrementi
    for(let x = 100 ;x > 2; x--) {
        console.log(x);
    
    }
for(let y=5; y < 100; y++){
    //let prendi =0;
    if(y % 2 == 0){
console.log('è multiplo di 100');
    }
}

/* questo esercito, me premette d'avere numeri casuali da 0 a 7
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log( getRandomInt(8));
  //
  function compoundOneYear(interestRate, currentVal) {
    return currentVal * (Math.E ** interestRate);
  }
  
  console.log(Math.E);

  // multipli di un numero;
  const device = (numeri, limit) => {
    let audience=[];
    items =2;
    while(audience.length < limit) {

        if(items % numeri ==0) {
        audience.push(items)
            }
    items ++;
        } 
return audience;
}  
console.log(device(3,20));*/

const multiplox =(sali, limit1) => {
arrai1 =[];
nume1 =0;
while(arrai1.length <= limit1) {
    if(nume1 % sali ==0) {

        arrai1.push(nume1);
    }
    nume1++;
}
return arrai1;
}
console.log(multiplox(2, 100 ) + ' multiplo di 2, sul 100 ');

function getRandomInt(max) {

    return Math.floor(Math.random()* max);

}
console.log(getRandomInt(8));


