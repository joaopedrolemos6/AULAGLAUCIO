function somar() {
    let sum = 0;
    let numArgs = arguments.length;
    for (let i = 0; i < numArgs; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  console.log(somar(1,2));
  console.log(somar(1,2,3,4));
  console.log(somar(2,3,4,5,6,7,8));
  console.log(somar(2,34,5,6,7,8,98,90,3,3,4,4,56,7,78,7,8,9));