// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// console.log(names[3]); // Prints: Maradona , Because indexing starts at 0.

// const newLength = names.push("Drogba");

// console.log(names); // Prints: ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo", "Drogba"]
// console.log(newLength); // Prints: 7 , the new length of the array

// const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
// const newLength = names.unshift("Figo");

// console.log(names); //  updated array
// console.log(newLength); //  return value

// const removedName = names.pop();
// console.log(removedName); //Removed name
// console.log(names); //Updated array

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

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const result = players.includes("Messi");

// console.log(result); 

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

// if (players.includes("Zlatan")) {
//     console.log("Zlatan är med i listan!");
// } else {
//     console.log("Zlatan är inte med i listan.");
// }


// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const index = players.indexOf("Maradona");

// console.log(index); // "Maradona" has index 5

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const messiIndex = players.indexOf("Messi");

// console.log(messiIndex); // returns -1 when the element is not in the array

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const playerString = players.join(", ");

// console.log(playerString);

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const playerString = players.join(" - ");

// console.log(playerString);

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const removedPlayers = players.splice(1, 2);

// console.log(players); // Updated players array
// console.log(removedPlayers); // Removed players

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const result = players.splice(2, 0, "Ronaldinho");

// console.log(players); // "Ronaldinho" is added at index position 2.
// console.log(result); // Returns an empty array []

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

// const ronaldoIndex = players.indexOf("Ronaldo");

// if (ronaldoIndex !== -1) {
//     players.splice(ronaldoIndex, 1);
// }

// console.log(players);

// const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
// const firstThreePlayers = players.slice(0, 3);

// console.log(players);
// console.log(firstThreePlayers); // slice() does not modify the original array

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const newPlayers = players.with(1, "Mbappé");

console.log(newPlayers);
console.log(players);