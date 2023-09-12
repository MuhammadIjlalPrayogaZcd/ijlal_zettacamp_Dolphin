type Combine = string | number;

function combineArrayElements(arr: Combine[]): string {
   return arr.join(" ");
}

// Example usage
console.log("+++++++++++++++++++++++++++TASK 1++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++CASE 1++++++++++++++++++++++++++");
const case1Array: Combine[] = [1, "data", "3", "result"];
const case1Result = combineArrayElements(case1Array);
console.log(case1Result); // Output: '1 data 3 result'

console.log("\n\n+++++++++++++++++++++++++++CASE 2++++++++++++++++++++++++++");
const case2Array: Combine[] = ["Bejo", "has", "4", "sport", "car"];
const case2Result = combineArrayElements(case2Array);
console.log(case2Result); // Output: 'Bejo has 4 sport car'

function sumOrConcat(arr: Combine[]): number | string | "invalid input" {
   if (arr.every((item) => typeof item === "number")) {
      // If all items are numbers, calculate the sum
      let total: number = 0;
      arr.forEach((element) => {
         total += +element;
      });
      return total;
   } else if (arr.every((item) => typeof item === "string")) {
      // If all items are strings, concatenate them with spaces
      return arr.join(" ");
   } else {
      // If the array contains a mix of types, return 'invalid input'
      return "invalid input";
   }
}

// Example usage
console.log("\n\n\n+++++++++++++++++++++++++++TASK 2++++++++++++++++++++++++++");
console.log("+++++++++++++++++++++++++++CASE 1++++++++++++++++++++++++++");
const case3Array: Combine[] = [1, 2, 3, 4];
const case3Result = sumOrConcat(case3Array);
console.log(case3Result); // Output: 10

console.log("\n\n+++++++++++++++++++++++++++CASE 2++++++++++++++++++++++++++");
const case4Array: Combine[] = ["the", "dolphins", "of", "zettacamp"];
const case4Result = sumOrConcat(case4Array);
console.log(case4Result); // Output: 'the dolphins of zettacamp'

console.log("\n\n+++++++++++++++++++++++++++CASE 3++++++++++++++++++++++++++");
const case5Array: Combine[] = ["Bejo", "has", 4, "sport", "car"];
const case5Result = sumOrConcat(case5Array);
console.log(case5Result); // Output: 'invalid input'

// Define the custom Product type
type Product = {
   name: string;
   vendor: string;
   quantity: number;
   inStock: number;
   price: number;
};

type Products = Product[];

// Define the custom SimplifiedProduct type with at least 1 optional property
type SimplifiedProduct = {
   name: string;
   buyAble: boolean;
   totalPrice?: number; // Optional property
};

// Transformation function
function transformProductToSimplified(product: Product): SimplifiedProduct {
   const { name: Name, quantity: Quantity, inStock: InStock, price: Price } = product;
   //    const Name = product.name;
   //    const Quantity = product.quantity;
   //    const InStock = product.inStock;
   //    const Price = product.price;

   // Determine if the product is buyable based on the InStock property
   const isBuyable = InStock > 0;

   // Calculate the total price if the product is buyable
   let total: SimplifiedProduct["totalPrice"];
   //    let total: number | undefined;
   if (isBuyable) {
      total = Quantity * Price;
   } else {
      total = undefined;
   }
   //    const total = isBuyable ? Quantity * Price : undefined;

   // Create the simplified product object
   if (total === undefined) {
      const simplifiedProduct: SimplifiedProduct = {
         name: Name,
         buyAble: isBuyable,
         //  totalPrice: total,
      };

      return simplifiedProduct;
   } else {
      const simplifiedProduct: SimplifiedProduct = {
         name: Name,
         buyAble: isBuyable,
         totalPrice: total,
      };

      return simplifiedProduct;
   }
}

// Example usage
console.log("\n\n\n+++++++++++++++++++++++++++TASK 3++++++++++++++++++++++++++");
const manyProduct: Products = [
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
const caseProduct1 = transformProductToSimplified(manyProduct[0]);
console.log(caseProduct1);

console.log("\n\n+++++++++++++++++++++++++++CASE 2++++++++++++++++++++++++++");
const caseProduct2 = transformProductToSimplified(manyProduct[1]);
console.log(caseProduct2);
