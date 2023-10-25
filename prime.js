function isprime(num) {
    let count = 0;  
    for (let i = 1; i <=num; i++) {
      if (num % i == 0) {
        count++;
      }
    }
    if (count == 2) 
      return false;
    else  
      return true;
  }
  let num = 20;
  for (let i = 1; i <= num; i++) {
    if (isprime(i)) {
      console.log(i);
    }
    
  }