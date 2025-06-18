let count = 1;
let timer = setInterval(() => {
    console.log(count);
    count++;
    if (count > 5) {
        clearInterval(timer); 
    }
}, 1000);
