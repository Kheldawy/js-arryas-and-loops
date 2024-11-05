//#1
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
console.log(names[3]); 

//#2
const newLength = names.push("Drogba");

console.log(names); 
console.log(newLength); 

//#3
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];
const newLength = names.unshift("Figo");

console.log(names); 
console.log(newLength); 

//#4
const removedName = names.pop();
console.log(removedName); //Removed name
console.log(names); //Updated array

//#5
const names = [
    "Figo",
    "Zlatan",
    "Beckham",
    "Zidane",
    "Maradona",
    "Pele",
    "Ronaldo",
  ];
  
  const lastElement = names.pop();  // Remove last element 
  names.unshift(lastElement);   // Beginning of the array
  console.log(names);

//#6

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const result = players.includes("Messi");

console.log(result); 

//#7
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

if (players.includes("Zlatan")) {
    console.log("Zlatan är med i listan!");
} else {
    console.log("Zlatan är inte med i listan.");
}

//#8
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const index = players.indexOf("Maradona");

console.log(index); // "Maradona" has index 5

//#9
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const messiIndex = players.indexOf("Messi");

console.log(messiIndex); // returns -1 when the element is not in the array

//#10
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const playerString = players.join(", ");

console.log(playerString);

//#11
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const playerString = players.join(" - ");

console.log(playerString);

//#12
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const removedPlayers = players.splice(1, 2);

console.log(players); // Updated players array
console.log(removedPlayers); // Removed players

//#13
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const result = players.splice(2, 0, "Ronaldinho");

console.log(players); // "Ronaldinho" is added at index position 2.
console.log(result); // Returns an empty array []

//#14
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

const ronaldoIndex = players.indexOf("Ronaldo");

if (ronaldoIndex !== -1) {
    players.splice(ronaldoIndex, 1);
}

console.log(players);

//#15
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const firstThreePlayers = players.slice(0, 3);

console.log(players);
console.log(firstThreePlayers); // slice() does not modify the original array

//#16
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];
const newPlayers = players.with(1, "Mbappé");

console.log(newPlayers);
console.log(players);

//#17
const players = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

const playersFromIndex2 = names.slice(2);

console.log(playersFromIndex2);
console.log(players); 


