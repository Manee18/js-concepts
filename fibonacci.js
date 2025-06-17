 // without recurssion 
function fibonacciLoop(n) {
 let a = 0, b = 1;

 console.log("Fibonacci using loop:");
  for (let i = 0; i < n; i++) {
    console.log(a);
   next = a + b;
    a = b;
    b = next;
  }
}















