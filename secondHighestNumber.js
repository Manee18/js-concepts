const numbers = [13,1,24,7,0];
let highest = numbers[0];
let secondHighest = 0

for(let i = 1; i < numbers.length;i++){
    if(numbers[i] > highest){
        secondHighest = highest;
        highest = numbers[i];

}
}

console.log("the second highest number is", secondHighest);