// Declare two variables with your favorite books
//let var
let favoriteBook1 = "Harry Potter and the Sorcerer's Stone";
//const var
const favoriteBook2 = "The Hitchhiker's Guide to the Galaxy";

console.log(favoriteBook1);
console.log(favoriteBook2);

// Update the value of the first variable with your least favorite book
favoriteBook1 = "Twilight";
console.log(favoriteBook1);

// Update const Var. Uncommenting this line will result in an error
// favoriteBook2 = "The Catcher in the Rye";

// Concatenate values from variables into a new variable
let concatenatedBooks = favoriteBook1 + " and " + favoriteBook2;
console.log(concatenatedBooks);

// Declare variables with different data types
let person; //String
let age = 25; // Number (integer)
let isStudent = true; // Boolean
let tall = 165.4; // Number (float)

console.log(person, "is an ", age, " years old with", tall, "cm tall " + isStudent);
