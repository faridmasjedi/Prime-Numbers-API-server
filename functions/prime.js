// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

let memory=[2,3];

function IsPrime(j){
  let s = 0

  let f = Math.floor(Math.sqrt(j))

  if ( (j-7)%6 === 0 ){
    for ( k=0; k<Math.ceil(f/4); k++ ){
      u1 = 6*k + 5
      u2 = u1 + 2
      u3 = 6*(Math.ceil(f/4)+k) + 5
      u4 = u3 + 2
      u5 = 6 * (Math.ceil(f/2)+k) + 5
      u6 = u5 + 2
      u7 = 6*(3*Math.ceil(f/4)+k) + 5
      u8 = u7 + 2

      if ( ( j%u1 === 0 ) && ( j!==u1 ) ){
          s1 = u1
          s = 1
          break
      }

      if ( ( j%u2===0 ) && ( j!==u2 ) ) {
        s1 = u2
        s = 1
        break
      }

      if ( ( j%u3===0 ) && ( j!==u3 ) ) {
        s1 = u3
        s = 1
        break
      }

      if ( ( j%u4===0 ) && ( j!==u4 ) ) {
        s1 = u4
        s = 1
        break
      }

      if ( ( j%u5===0 ) && ( j!==u5 ) ){
        s1 = u5
        s = 1
        break
      }

      if ( ( j%u6===0 )&&( j!==u6 ) ) {
        s1 = u6
        s = 1
        break
      }

      if ( ( j%u7===0 ) && ( j!==u7 ) ) {
        s1 = u7
        s = 1
        break
      }

      if ( ( j%u8===0 ) && ( j!==u8 ) ) {
        s1 = u8
        s = 1
        break
      }
    }

  }else if ( (j-5)%6 === 0 ) {
    for ( k=0; k<Math.ceil(f/4); k++ ){
      u1 = 6*k + 5
      u2 = u1 + 2
      u3 = 6*(Math.ceil(f/4)+k) + 5
      u4 = u3 + 2
      u5 = 6*(Math.ceil(f/2)+k) + 5
      u6 = u5 + 2
      u7 = 6*(3*Math.ceil(f/4)+k) + 5
      u8 = u7 + 2

      if ( ( j%u1===0 ) && ( j!==u1 ) ) {
        s1 = u1
        s = 1
        break
      }

      if ( ( j%u2===0 ) && ( j!==u2 ) ) {
        s1 = u2
        s = 1
        break
      }

      if ( ( j%u3===0 ) && ( j!==u3 ) ) {
        s1 = u3
        s = 1
        break
      }

      if ( ( j%u4===0 ) && ( j!==u4 ) ) {
        s1 = u4
        s = 1
        break
      }

      if ( ( j%u5===0 ) && ( j!==u5 ) ) {
        s1 = u5
        s = 1
        break
      }

      if ( ( j%u6===0 ) && ( j!==u6 ) ) {
        s1 = u6
        s = 1
        break
      }

      if ( ( j%u7===0 ) && ( j!==u7 ) ) {
        s1 = u7
        s = 1
        break
      }

      if ( ( j%u8===0 ) && ( j!==u8 ) ) {
        s1 = u8
        s = 1
        break
      }
    }
  }

  if ( ( j === 1 ) ) {return -1;};
  if ( ( (j-7)%6 === 0 ) || ( (j-5)%6 === 0 ) || ( j ===2 ) || ( j == 3 ) ) {

    if ( s === 0 ){
      return j;
    }else{
      return s1;
    }

  }else if ( (j%3 === 0) && (j!==3) ) {
    return 3;

  }else if ( (j%2 === 0) && (j!==2) ) {
    return 2;
  }
}

function Divisions_FM(j) {
  let ss = [];

  while ( j>1 ) {
    ss.push(IsPrime(j));
    j = Math.floor(j/IsPrime(j));
  }

  ss.push(1);

  return ss.sort(function f(a,b){return a-b;});
}

function Primes(j) {
  let result=[];
  if (j<memory[memory.length-1]) {
    for(i=0;i<memory.length;i++){
      if (memory[i]>j) {return [result,result.length]}
      if (memory[i]<=j){
        result.push(memory[i])
      }
    }
  }else{

  for (i=memory[memory.length-1]+1; i<=j; i++){
    if (IsPrime(i) === i){
      memory.push(i);
    }
  }
  return [memory,memory.length];

  }

}


function MakePrimeByBound(r1,r2){
  let result=[];
  if (r2<=memory[memory.length-1]) {
    for(i=0;i<memory.length;i++){
      if (memory[i]>r2) {return [result,result.length]}
      if (memory[i]<=r2 && memory[i]>=r1){
        result.push(memory[i])
      }
    }
  }else{

    for(i=0;i<memory.length;i++){
      if (memory[i]<=r2 && memory[i]>=r1){
        result.push(memory[i])
      }
    }
    let l1 = 0;
    let l2 = 0;
    let s = 0;
    let ss = 0;

    r1 = memory[memory.length-1]+1;
    l1 = (r1-5);
    l2 = (r1-7);

    let f = Math.floor(Math.sqrt(r2))

    for( i=r1; i<r2+1; i++){

      if ((i-5)%6 === 0){
        for (k=0; k<f+1;k++){
          if ((i%(6*k+5)===0) && (i!==(6*k+5))){
            s=1
            break
          }
          if ((i%(6*k+7)===0) && (i!==(6*k+7))){
            ss=1
            break
          }
        }

        if (s===0 && ss===0){
          result.push(i)
          memory.push(i)
        }

      }

      s = 0
      ss = 0

      if ((i-7)%6 === 0){
        for(k=0; k<f+1; k++){
          if ((i%(6*k+5)===0) && (i!==(6*k+5))){
            s=1
            break
          }
          if ((i%(6*k+7)===0) && (i!==(6*k+7))){
            ss=1
            break
          }
        }
        if (s===0 && ss===0 && i!==1){
          result.push(i)
          memory.push(i)

        }
      }
    }
    return [result, result.length];

  }
}

function IsSophiePrime(num){
  const isPrime = IsPrime(num) === num ;
  if (isPrime) {
    const sophiePrime = IsPrime(2*num+1) === 2*num+1;
    if (sophiePrime) {
      return [true,2*num+1];
    }else{
      return [false,2*num+1];
    }
  }else{
    return[false,false];
  }
}

function IsMersennePrime(num){
  const isPrime = IsPrime(num) === num ;
  if (isPrime){
    const mersennePrime = 2**num - 1;
    const isMersenne = IsPrime(mersennePrime) === mersennePrime;
    if (isMersenne) {
      return [true,mersennePrime];
    }else{
      return [false,mersennePrime];
    }
  }else{
    return[false,false];
  }
}

function IsTwinPrime(num){
  let result=[];

  const isPrime = IsPrime(num) === num ;
  if (isPrime){
    let mersennePrimeFirst = num + 2 ;
    let mersennePrimeSecond = num - 2;

    const isMersenneFirst = IsPrime(mersennePrimeFirst) === mersennePrimeFirst;
    const isMersenneSecond = IsPrime(mersennePrimeSecond) === mersennePrimeSecond;
    // console.log(isMersenneFirst,mersennePrimeFirst)
    // console.log(isMersenneSecond,mersennePrimeSecond)
    if (isMersenneFirst) {
      result = [true,mersennePrimeFirst];
    }else{
      result = [false,mersennePrimeFirst];
    }

    if (isMersenneSecond) {
      result.push(true,mersennePrimeSecond);
    }else{
      result.push(false,mersennePrimeSecond);
    }

  }else{
    result = [false,false,false,false];
  }
  return result;
}


function IsIsolatedPrime(num){
  const isPrime = IsPrime(num) === num;

  if (isPrime){
    let mersennePrimeFirst = num + 2 ;
    let mersennePrimeSecond = num - 2;

    const isMersenneFirst = IsPrime(mersennePrimeFirst) === mersennePrimeFirst;
    const isMersenneSecond = IsPrime(mersennePrimeSecond) === mersennePrimeSecond;

    if (!isMersenneFirst && !isMersenneSecond){
      return `- ${num} is an isolated prime`;
    }
    return `- ${num} is prime, but not an isolated one.`;
  }
  return `- ${num} is not a prime number.`
}

module.exports = { IsPrime,
                   Divisions_FM,
                   Primes,
                   memory,
                   MakePrimeByBound,
                   IsSophiePrime,
                   IsMersennePrime,
                   IsTwinPrime,
                   IsIsolatedPrime
                 }
