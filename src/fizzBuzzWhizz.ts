/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  75      FizzBuzz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
 */
export const game = (input: number) =>{
  
  let nPrimo = true;
    
    if (input <= 1) {
      nPrimo = false;
    } else {
      for (let i = 2; i < input; i++) {
        if (input % i === 0) {
          nPrimo = false; 
        }
      }
    }
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz";
  }
  if (input % 3 === 0 && nPrimo === true) {
    return "FizzWhizz";
  }
  if (input % 5 === 0 && nPrimo === true) {
    return "BuzzWhizz";
  }
  if (input % 5 === 0) {
    return "Buzz";
  }
  if (input % 3 === 0) {
    return "Fizz";
  }
  
  if (nPrimo === true) {
    return "Whizz";
  } else {
    return input;
  }
}