// Declare two variables with your favorite books
//let var
let favoriteBook1 = "Harry Potter and the Sorcerer's Stone";
//const var
const favoriteBook2 = "The Hitchhiker's Guide to the Galaxy";

// console.log(favoriteBook1);
// console.log(favoriteBook2);

// Update the value of the first variable with your least favorite book
favoriteBook1 = "Twilight";
favoriteBook1 = "The Hitchhiker's Guide to the Galaxy";
console.log(favoriteBook1);

//comparison operator to compare name of books
console.log(favoriteBook1 === favoriteBook2);

//new var for price of books
let priceFavoriteBook1 = 550000;
let priceFavoriteBook2 = 200000;

//menggunakan math.max
console.log("Max of Two dengan Math.max ", Math.max(priceFavoriteBook1, priceFavoriteBook2));

//average of price book
averageBooks = (priceFavoriteBook1 + priceFavoriteBook2) / 2;
console.log("Average = ", averageBooks);

isExpensive = priceFavoriteBook1 > 500000 ? "expensive" : "cheap";
console.log(isExpensive);

// Update const Var. Uncommenting this line will result in an error
// favoriteBook2 = "The Catcher in the Rye";

// Concatenate values from variables into a new variable
let concatenatedBooks = favoriteBook1 + " and " + favoriteBook2;
console.log(concatenatedBooks);

// Declare variables with different data types
let studentData = {
   person: "Ijlal", //String
   age: 25, // Number (integer)
   isMarried: true, // Boolean
   tall: 165.4,
   favMaterial: ["Math", "Biology"], // array (object)
};

console.log(studentData.person, "is an ", studentData.age, " years old with", studentData.tall, "cm tall and ", studentData.isMarried ? "he is already married" : "he is not married");
console.log("Sebelum fav material di push new item");
console.log(studentData.favMaterial);
studentData.favMaterial.push("English");
console.log("Setelah di push");
console.log(studentData.favMaterial);
console.log("sebelum ditambah new key");
console.log(studentData);
console.log("setelah ditambah new key");
studentData.favFood = ["Fried Rice", "Fried Chicked"];
console.log(studentData);
