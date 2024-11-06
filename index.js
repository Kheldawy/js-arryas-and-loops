// // #1.
// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// console.log(names[3]); // Prints: Maradona , Because indexing starts at 0.

// //#2.
// const newLength = names.push("Drogba");

// console.log(names); // Prints: ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo", "Drogba"]
// console.log(newLength); // Prints: 7 , the new length of the array

// //#3.
// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// const newLength = names.unshift("Figo");

// console.log(names); //  updated array
// console.log(newLength); //  return value

// //#4.
// const removedName = names.pop();
// console.log(removedName); //Removed name
// console.log(names); //Updated array

// //#5.
// const names = [
//     "Figo",
//     "Zlatan",
//     "Beckham",
//     "Zidane",
//     "Maradona",
//     "Pele",
//     "Ronaldo",
//   ];
  
//   const lastElement = names.pop();  // Remove last element 
//   names.unshift(lastElement);   // Beginning of the array
//   console.log(names);

//   //#7.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const result = players.includes("Messi");

// console.log(result); 

// //#8.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

// if (players.includes("Zlatan")) {
//     console.log("Zlatan är med i listan!");
// } else {
//     console.log("Zlatan är inte med i listan.");
// }

// //#9.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const index = players.indexOf("Maradona");

// console.log(index); // "Maradona" has index 5

// // #10.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const messiIndex = players.indexOf("Messi");

// console.log(messiIndex); // returns -1 when the element is not in the array

// // #11.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const playerString = players.join(", ");

// console.log(playerString);

// //#12.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const playerString = players.join(" - ");

// console.log(playerString);

// //#13.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const removedPlayers = players.splice(1, 2);

// console.log(players); // Updated players array
// console.log(removedPlayers); // Removed players

// //#14.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const result = players.splice(2, 0, "Ronaldinho");

// console.log(players); // "Ronaldinho" is added at index position 2.
// console.log(result); // Returns an empty array []

// //15.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

// const ronaldoIndex = players.indexOf("Ronaldo");

// if (ronaldoIndex !== -1) {
//     players.splice(ronaldoIndex, 1);
// }

// console.log(players);

// //16.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const firstThreePlayers = players.slice(0, 3);

// console.log(players);
// console.log(firstThreePlayers); // slice() does not modify the original array


// //17.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

// const newPlayers = players.slice(2);

// console.log(newPlayers); 
// console.log(players);

// //18.
// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const newPlayers = players.with(1, "Mbappé");

// console.log(newPlayers);
// console.log(players);

// //19.
// const numbers = [5, 8, 12, 20, 3];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// //20.
// const numbers = [5, 8, 12, 20, 3];
// let sum = 0; 

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]; 
// }
// console.log("The sum of all the numbers in the array is: " + sum);

// //21.
// const numbers = [5, 8, 12, 20, 3];
// let max = numbers[0]; 

// for (let i = 1; i < numbers.length; i++) { 
//     if (numbers[i] > max) { 
//         max = numbers[i]; 
//     }
// }
// console.log("The largest number in the array is: " + max);

// //22.
// const numbers = [5, 8, 12, 20, 3];
// const doubledNumbers = []; 

// for (let i = 0; i < numbers.length; i++) {
//     doubledNumbers[i] = numbers[i] * 2; 
// }

// console.log("Doubled numbers:", doubledNumbers);

// //23.
// const numbers = [5, 8, 12, 20, 3];
// let sum = 0; 

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]; 

// const average = sum / numbers.length;

// console.log("The average of the numbers in the array is: " + average);

// //24.
// const numbers = [5, 8, 12, 20, 3];
// let min = numbers[0]; 

// for (let i = 1; i < numbers.length; i++) { 
//     if (numbers[i] < min) { 
//         min = numbers[i]; 
//     }
// }

// console.log("The smallest number in the array is: " + min);

// //25.
// const mixedNumbers = [3, -5, 12, -1, 8, -6]; 
// const positiveNumbers = []; 

// for (let i = 0; i < mixedNumbers.length; i++) {
//     if (mixedNumbers[i] > 0) { 
//         positiveNumbers.push(mixedNumbers[i]); 
//     }
// }

// console.log("Positive numbers in the array: " , positiveNumbers);

// //26.
// const mixedNumbers = [3, -5, 12, -1, 8, -6]; 

// for (const number of mixedNumbers) {
//     if (number > 0) { 
//         console.log("Positivt tal:", number); 
//     }
// }

// //27.
// const numbers = [3, 5, 12, 1, 8, 6]; 
// let index = 0; 

// while (index < numbers.length) {
   
//     console.log(numbers[index]);

   
//     if (numbers[index] > 10) {
//         break; 
//     }

//     index++; 
// }

// //28.
// const mixedNumbers = [3, -5, 12, -1, 8, -6]; 
// let index = 0; 
// let negativeCount = 0; 

// while (index < mixedNumbers.length) {
//     if (mixedNumbers[index] < 0) { 
//         negativeCount++; 
//     }
//     index++; 
// }

// console.log("Number of negative numbers:", negativeCount);

// //29.
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"]; 

// for (let i = 0; i < words.length; i++) {
//     const word = words[i]; 
//     const length = word.length; 
//     console.log(`${word}: ${length}`); 
// }

// //30.
// const words = ["banana", "apple", "kiwi", "strawberry", "peach"]; 

// for (let i = 0; i < words.length; i++) {
//     firstLetters += words[i][0]; 
// }

// console.log(firstLetters);

// //31.
// const numbers = [5, 10, 3, 8, 2, 7]; 
// let sum = 0; 
// let index = 0; 

// while (sum <= 25 && index < numbers.length) {
//     sum += numbers[index]; 
//     console.log(numbers[index]); 
//     index++; 
// }

// //32.
// const mixedNumbers = [1, 2, 3, 4, 5, 6]; 
// let sum = 0; 

// for (const number of mixedNumbers) {
//     sum += number; 
// }

// console.log(sum);
