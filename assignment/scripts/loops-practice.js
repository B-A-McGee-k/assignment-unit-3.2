console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');

//for loop here-b

// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');



// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

// The part that need to be changed is simply the maximum value, now "i<6" from "i<4"
for (let i=0; i<6; i++) {
  console.log(i); 
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

// Changing the starting point from 0 to 3
for (let i=3; i<6; i++) {
  console.log(i)
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// Two ways come to mind, multiply the results by 2, or make an if clause allowing only evens in a count of 2-10
for (let i=1; i<6; i++) {
  console.log(i*2)
}
// Multiplying it is easier however :/

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

// Just invert the functions
for (let i=5; i>-1; i--) {
  console.log(i)
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');

for(let star = 0; star<5; star++) {
  console.log('Some stars include ', stars[star], '.')
}


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

let star = 0;
while (star < 5) {
  console.log(stars[star], 'is a star');
  star++
}

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

let threeB = 0
while (threeB < 6) {
  console.log(threeB);
  threeB++
}
// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');

let threeC = 10
while (threeC > 4) {
  console.log(threeC); 
  threeC--
}