function startTrip(){
console.log("Trip Begins");
packBags();
goToAirport();
boardFlight();
console.log("Trip started succesfully");
}
function packBags(){
console.log("packing bags");
}

function goToAirport() {
  console.log("Going to the airport");
  callTaxi();
}

function callTaxi() {
  console.log("Calling a taxi");
}

function boardFlight() {
  console.log("Boarding the flight");
}

startTrip();


