const arr=[1,2,3]
const target=5;

function twosum (arr,target){
    for(i=0; i<arr.length; i++){
        for(j=i+1; j<arr.length; j++){
            if(arr[i] + arr[j] == target){
             return[i,j];
            }
           
        }
    }
}

console.log (twosum (arr,target));









// let a=0;
// let b=1;

// function printfibonacci (n) {

//     console.log(" fibonacci series: ");
    
//     for (let i=0; i<=n; i++){
//         console.log (a)

//         let next = a+b;
//             a=b ;
//             b=next;


//     }
// }

// console.log ( printfibonacci (10))

// let rows=5;

// for (let i=1; i<=5; i++){
//     str="";

//     for(let j=1; j<=i; j++ ){
//         str+=j;
//     }

//     console.log (str)
// }
