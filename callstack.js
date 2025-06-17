function makeSandwich() {
  console.log("Start making sandwich");
  getBread();
  addFilling();
  closeSandwich();
  console.log("Sandwich is ready!");
}

function getBread() {
  console.log("Getting the bread");
}

function addFilling() {
  console.log("Adding fillings");
  addCheese();
  addLettuce();
}

function addCheese() {
  console.log("Adding cheese");
}

function addLettuce() {
  console.log("Adding lettuce");
}

function closeSandwich() {
  console.log("Closing the sandwich");
}

makeSandwich();
