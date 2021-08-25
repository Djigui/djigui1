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

// questo esercito, me premette d'avere numeri casuali da 0 a 7
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
    let numer11 = 10;
  }
  
  console.log( getRandomInt(8));
  ///
  function compoundOneYear(interestRate, currentVal) {
    return currentVal * (Math.E ** interestRate);
  }
  
  console.log(Math.E);