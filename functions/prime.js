// this is a memory array. when you run it for first time, this will save -
//- new primes and can use it for next requests.
// todo: instead of an array, use sql to have all the result in a table.
let memory=[2,3];

// this is a function written based on my pattern of prime.
// the point: the output of this function is either the number itself, or another -
//- number that is a factor of that number. if the output is the number itself, then -
//- it is a prime number.
function IsPrime(j){
  let s = 0
  // for checking to be prime or not, it should just check it up to sqrt of a number
  let f = Math.floor(Math.sqrt(j))

  // this is written according to the conditions of a pattern
  if ( (j-7)%6 === 0 ){
    // dividing the range to for range to make it faster.
    for (let k=0; k<Math.ceil(f/4); k++ ){
      u1 = 6*k + 5;
      u2 = u1 + 2;
      u3 = 6*(Math.ceil(f/4)+k) + 5;
      u4 = u3 + 2;
      u5 = 6 * (Math.ceil(f/2)+k) + 5;
      u6 = u5 + 2;
      u7 = 6*(3*Math.ceil(f/4)+k) + 5;
      u8 = u7 + 2;

      if ( ( j%u1 === 0 ) && ( j!==u1 ) ){
          s1 = u1;
          s = 1;
          break;
      }

      if ( ( j%u2===0 ) && ( j!==u2 ) ) {
        s1 = u2;
        s = 1;
        break;
      }

      if ( ( j%u3===0 ) && ( j!==u3 ) ) {
        s1 = u3;
        s = 1;
        break;
      }

      if ( ( j%u4===0 ) && ( j!==u4 ) ) {
        s1 = u4;
        s = 1;
        break;
      }

      if ( ( j%u5===0 ) && ( j!==u5 ) ){
        s1 = u5;
        s = 1;
        break;
      }

      if ( ( j%u6===0 )&&( j!==u6 ) ) {
        s1 = u6;
        s = 1;
        break;
      }

      if ( ( j%u7===0 ) && ( j!==u7 ) ) {
        s1 = u7;
        s = 1;
        break;
      }

      if ( ( j%u8===0 ) && ( j!==u8 ) ) {
        s1 = u8;
        s = 1;
        break;
      }
    }

  }else if ( (j-5)%6 === 0 ) {
    for (let k=0; k<Math.ceil(f/4); k++ ){
      u1 = 6*k + 5;
      u2 = u1 + 2;
      u3 = 6*(Math.ceil(f/4)+k) + 5;
      u4 = u3 + 2;
      u5 = 6*(Math.ceil(f/2)+k) + 5;
      u6 = u5 + 2;
      u7 = 6*(3*Math.ceil(f/4)+k) + 5;
      u8 = u7 + 2;

      if ( ( j%u1===0 ) && ( j!==u1 ) ) {
        s1 = u1;
        s = 1;
        break;
      }

      if ( ( j%u2===0 ) && ( j!==u2 ) ) {
        s1 = u2;
        s = 1;
        break;
      }

      if ( ( j%u3===0 ) && ( j!==u3 ) ) {
        s1 = u3;
        s = 1;
        break;
      }

      if ( ( j%u4===0 ) && ( j!==u4 ) ) {
        s1 = u4;
        s = 1;
        break;
      }

      if ( ( j%u5===0 ) && ( j!==u5 ) ) {
        s1 = u5;
        s = 1;
        break;
      }

      if ( ( j%u6===0 ) && ( j!==u6 ) ) {
        s1 = u6;
        s = 1;
        break;
      }

      if ( ( j%u7===0 ) && ( j!==u7 ) ) {
        s1 = u7;
        s = 1;
        break;
      }

      if ( ( j%u8===0 ) && ( j!==u8 ) ) {
        s1 = u8;
        s = 1;
        break;
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

// this function will give the factors of number.
function Divisions_FM(j) {
  let ss = [];
  //according to the IsPrime function, this number will be devided by its factors.
  while ( j>1 ) {
    ss.push(IsPrime(j));
    j = Math.floor(j/IsPrime(j));
  }

  ss.push(1);

  // sort the outputs.
  return ss.sort(function f(a,b){return a-b;});
}

// this function will gives the primes to a number
function Primes(j) {
  let result=[];

  for (let i=0; i<=j; i++){
    if (IsPrime(i) === i){
      result.push(i);
    }
  }
  return [result,result.length];

}

// this function gonna give the primes in a range.
function MakePrimeByBound(r1,r2){

  let first_res=Primes(r2)[0];
  let res = [];
  for (i=0; i<first_res.length; i++){
    if (first_res[i]>=r1){
      res.push(first_res[i]);
    }
  }

  return [res, res.length];

}

// it will check if the prime is sophie-prime or not
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

// this will check if the number is mersenne prime or not.
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

// this will check if the prime is a twin one or not.
function IsTwinPrime(num){
  let result=[];

  const isPrime = IsPrime(num) === num ;
  if (isPrime){
    let mersennePrimeFirst = num + 2 ;
    let mersennePrimeSecond = num - 2;

    const isMersenneFirst = IsPrime(mersennePrimeFirst) === mersennePrimeFirst;
    const isMersenneSecond = IsPrime(mersennePrimeSecond) === mersennePrimeSecond;

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
    // if the input number is not prime, this will return
    result = [false,false,false,false];
  }
  return result;
}

// this will check if the number is isolated prime or not.
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
