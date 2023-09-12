function combineArrayElements(arr) {
    return arr.join(" ");
}
// Example usage
console.log("+++++++++++++++++++++++++++TASK 1++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++CASE 1++++++++++++++++++++++++++");
var case1Array = [1, "data", "3", "result"];
var case1Result = combineArrayElements(case1Array);
console.log(case1Result); // Output: '1 data 3 result'
console.log("\n\n+++++++++++++++++++++++++++CASE 2++++++++++++++++++++++++++");
var case2Array = ["Bejo", "has", "4", "sport", "car"];
var case2Result = combineArrayElements(case2Array);
console.log(case2Result); // Output: 'Bejo has 4 sport car'
function sumOrConcat(arr) {
    if (arr.every(function (item) { return typeof item === "number"; })) {
        // If all items are numbers, calculate the sum
        var total_1 = 0;
        arr.forEach(function (element) {
            total_1 += +element;
        });
        return total_1;
    }
    else if (arr.every(function (item) { return typeof item === "string"; })) {
        // If all items are strings, concatenate them with spaces
        return arr.join(" ");
    }
    else {
        // If the array contains a mix of types, return 'invalid input'
        return "invalid input";
    }
}
// Example usage
console.log("\n\n\n+++++++++++++++++++++++++++TASK 2++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++CASE 1++++++++++++++++++++++++++");
var case3Array = [1, 2, 3, 4];
var case3Result = sumOrConcat(case3Array);
console.log(case3Result); // Output: 10
console.log("\n\n+++++++++++++++++++++++++++CASE 2++++++++++++++++++++++++++");
var case4Array = ["the", "dolphins", "of", "zettacamp"];
var case4Result = sumOrConcat(case4Array);
console.log(case4Result); // Output: 'the dolphins of zettacamp'
console.log("\n\n+++++++++++++++++++++++++++CASE 3++++++++++++++++++++++++++");
var case5Array = ["Bejo", "has", 4, "sport", "car"];
var case5Result = sumOrConcat(case5Array);
console.log(case5Result); // Output: 'invalid input'
// Transformation function
function transformProductToSimplified(product) {
    var Name = product.name, Quantity = product.quantity, InStock = product.inStock, Price = product.price;
    //    const Name = product.name;
    //    const Quantity = product.quantity;
    //    const InStock = product.inStock;
    //    const Price = product.price;
    // Determine if the product is buyable based on the InStock property
    var isBuyable = InStock > 0;
    // Calculate the total price if the product is buyable
    var total;
    //    let total: number | undefined;
    if (isBuyable) {
        total = Quantity * Price;
    }
    else {
        total = undefined;
    }
    //    const total = isBuyable ? Quantity * Price : undefined;
    // Create the simplified product object
    if (total === undefined) {
        var simplifiedProduct = {
            name: Name,
            buyAble: isBuyable,
            //  totalPrice: total,
        };
        return simplifiedProduct;
    }
    else {
        var simplifiedProduct = {
            name: Name,
            buyAble: isBuyable,
            totalPrice: total,
        };
        return simplifiedProduct;
    }
}
// Example usage
console.log("\n\n\n+++++++++++++++++++++++++++TASK 3++++++++++++++++++++++++++");
var manyProduct = [
    {
        name: "Coca Cola",
        vendor: "Coca Cola Company",
        quantity: 5,
        inStock: 100,
        price: 5000,
    },
    {
        name: "Sari Roti",
        vendor: "Toko Kue Sebelah",
        quantity: 2,
        inStock: 0,
        price: 10000,
    },
];
console.log("+++++++++++++++++++++++++++CASE 1++++++++++++++++++++++++++");
var caseProduct1 = transformProductToSimplified(manyProduct[0]);
console.log(caseProduct1);
console.log("\n\n+++++++++++++++++++++++++++CASE 2++++++++++++++++++++++++++");
var caseProduct2 = transformProductToSimplified(manyProduct[1]);
console.log(caseProduct2);
