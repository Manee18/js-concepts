let numbers = {
  a: 12,
  b: 4
};

function ArithmeticTask(obj) {
  console.log("Numbers:", obj.a, "and", obj.b);

  function add(obj) {
    console.log("Addition:", o.a + o.b);
  }

  function subtract(obj) {
    console.log("Subtraction:", o.a - o.b);
  }

  function multiply(obj) {
    console.log("Multiplication:", o.a * o.b);
  }

  function divide(obj) {
      console.log("Division:", o.a / o.b);
    }


  add(obj);
  subtract(obj);
  multiply(obj);
  divide(obj);
}

ArithmeticTask(numbers);