// without recurssion 
//function fibonacciLoop(n) {
 // let a = 0, b = 1;

 // console.log("Fibonacci using loop:");
  //for (let i = 0; i < n; i++) {
   // console.log(a);
   // next = a + b;
   // a = b;
   // b = next;
  //}
//}


//fibonacciLoop(10);

//swap 2 number var without using 3rd number
//let a=2;
//let b=4;
//a=a+b;
//b=a-b;
//a=a-b;
//console.log("a=", a , "b=", b);


// function factorial(n){

//     let fact = 1;

//     for (let i=1; i<=n; i++){
        
//         fact *=i;

//     }
//     return fact;    
// }

// console.log ( factorial(5))


// let row=5 

// for (let i=1; i<=row; i++ ){
//     let str="";
//     for (let j=1; j<=i; j++){
//         str+=i;

//     }

//     console.log(str);
// }


const arr=[1,2,3];
const target=5;

function twoSum (arr,target){
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr(i) + arr(j) == target);{
             return[i,j];
            }
           
        }
    }
}

console.log (twoSum (arr,target));












