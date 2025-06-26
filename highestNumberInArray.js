let array = [5,8,9,3,0,6];
let max = array[0];

for(i=0;i<array.length;i++){
    if(array[i]>max)
    max = array[i]
}
console.log("highest number is "+max);