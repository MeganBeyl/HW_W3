let nameArray = ["Jim", "Mike", "Dave", "Josh", "Tim", "Jane", "Susan", "Haley", "Matthew", "John", "Spencer", "Stephan", "Mable", "Steve", "Jacob", "Ruby", "Adam", "Bruce"];
let stevePresent = false;

for(let i = 0; i < nameArray.length; i++){
    if(nameArray[i] === "Steve"){
        stevePresent = true;
    }
 }

if(stevePresent === true){
    console.log("Yes, Steve is present!");
} else {
    console.log("No, Steve is not present!");
}

//console.log("Is Steve Present? Answer: " + stevePresent);

let computers = [600, 1000, 400, 300, 600, 200, 100, 400, 500];
let requiredPower = 3500;
let totalPower = 0;

for(let i = 0; i < computers.length; i++){
    totalPower = 3500;
    console.log(totalPower)
}

if(totalPower >= requiredPower){
    console.log("There is enough power!");
} else {
    console.log("There is not enough power!");
}

for(let i = 0; i < 100; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}


let studentMarks = [23, 45, 67, 55, 80, 90, 45, 60, 56, 30, 31];
let total = 0;

for(let i = 0; i < studentMarks.length; i++){
    total += studentMarks[i];
}

let average = total/studentMarks.length;
var text = "The Average is " + average;

console.log(text);

let ageOne = 23;
let personOne = "Josh";

let ageTwo = 16;
let personTwo = "Jacob";

if(ageOne > 18 && personOne === "Josh"){
    console.log("User & Age match");
} else {
    console.log("User & Age Do Not Match");
}

if(ageTwo < 18 || personTwo === "Peter"){
    console.log("User is Younger than 18 or is Peter");
} else {
    console.log("User is Younger than 18 and is Not Peter");
}