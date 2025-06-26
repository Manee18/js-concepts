const principle = 10000
const rate = 5
const time = 3

function calculateSimpleInterest(principle, rate, time){
    const interest = (principle * rate * time)/ 100;
    return interest;
}