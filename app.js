console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if(i % 2 == 1) {
        console.log(i); 
        }  
    }
}


printOdds(81);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(name, age) {
    let aboveSixteen = `Congrats ${name}, you can drive!`;
    let belowSixteen = `Sorry ${name}, but you need to wait until you are 16.`;

    if (age < 16) {
        console.log(belowSixteen); 
    } else {
       console.log(aboveSixteen); 
    }    
}

checkAge("John", 34);
checkAge("Joe", 14);
checkAge("Jane", 23);
