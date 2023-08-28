let listOfBook = [
   {
      title: "The Art of Thinking Clearly",
      author: "Rolf Dobely",
      originalPrice: 20000,
      isDiscount: true,
      discountPercentage: 10,
      stock: 15,
      taxPercentage: 10,
   },
   {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      originalPrice: 30000,
      isDiscount: true,
      discountPercentage: 5,
      stock: 10,
      taxPercentage: 10,
   },
   {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      originalPrice: 15000,
      isDiscount: false,
      discountPercentage: 0,
      stock: 5,
      taxPercentage: 10,
   },
];

function purchaseBook(books, purchasedAmount, creditTermMonths) {
   // Constants
   const governmentTax = 0.1; // 10% tax
   const creditsTax = 0.02; // 2% tax

   // Calculations
   let discountAmount = 0;
   let priceAfterDiscount = 0;
   if (books.isDiscount == true) {
      discountAmount = books.originalPrice * (books.discountPercentage / 100);
      priceAfterDiscount = books.originalPrice - discountAmount;
   } else {
      discountAmount = 0;
      priceAfterDiscount = books.originalPrice;
   }

   let taxAmount = priceAfterDiscount * (books.taxPercentage / 100);
   let priceAfterTax = priceAfterDiscount + taxAmount;
   let governmentTaxAmount = priceAfterTax * governmentTax;
   let priceAfterGovernmentTax = priceAfterTax + governmentTaxAmount;

   let stockAvailable = books.stock;

   // Calculate total price based on available stock
   let totalPrice = 0;
   for (let i = 0; i < purchasedAmount; i++) {
      if (books.stock > 0) {
         totalPrice += priceAfterGovernmentTax;
         books.stock--;
      } else {
         break;
      }
   }

   // Calculate due dates using array function
   const currentDate = new Date();
   // const dueDates = Array.from({ length: creditTermMonths }, (_, index) => {
   //    const dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + index + 1, currentDate.getDate());
   //    return dueDate.toDateString();
   // });
   let dueDates = [];
   for (let i = 1; i <= creditTermMonths; i++) {
      let dueDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + i, currentDate.getDate());
      dueDates.push(dueDate.toDateString());
   }

   let creditsPerMonth = (totalPrice / creditTermMonths) * creditsTax;
   let pricePerMonth = totalPrice / creditTermMonths + creditsPerMonth;

   // Display
   console.log("Book Title:", books.title);
   console.log("Author:", books.author);
   console.log("Original Price:", books.originalPrice);
   if (books.isDiscount == true) {
      console.log("Your Book is Get Discount");
      console.log("Discount Percentage:", books.discountPercentage + "%");
      console.log("Amount of Discount:", discountAmount);
      console.log("Price After Discount:", priceAfterDiscount);
   } else {
      console.log("Your Book Is not Get Discount");
      console.log("Price is Normal:", priceAfterDiscount);
   }
   console.log("Tax Percentage:", books.taxPercentage + "%");
   console.log("Amount of Tax:", taxAmount);
   console.log("Price After Tax:", priceAfterTax);
   console.log("Government Tax: 10%");
   console.log("Amount of Government Tax:", governmentTaxAmount);
   console.log("Price After Government Tax:", priceAfterGovernmentTax);

   if (creditTermMonths > 1) {
      if (purchasedAmount > stockAvailable) {
         console.log("Purchased Amount:", purchasedAmount);
         console.log("You can only Purchase", stockAvailable, "Books");
         console.log("Total Price:", totalPrice);
         console.log("Total Credits:", creditTermMonths);
         console.log("Credits Tax Per Month:", creditsPerMonth);
         console.log("Price Per Month:", pricePerMonth);
         console.log("Due Dates Per Month:", dueDates);
         dueDates.forEach((element) => console.log(element));
      } else {
         console.log("Purchased Amount:", purchasedAmount);
         console.log("Total Price:", totalPrice);
         console.log("Total Credits:", creditTermMonths);
         console.log("Credits Tax Per Month:", creditsPerMonth);
         console.log("Price Per Month:", pricePerMonth);
         console.log("Due Dates Per Month:");
         dueDates.forEach((element) => console.log(element));
      }
   } else {
      if (purchasedAmount > stockAvailable) {
         console.log("Purchased Amount:", purchasedAmount);
         console.log("You can only Purchase", stockAvailable, "Books");
         console.log("Total Price:", totalPrice);
      } else {
         console.log("Purchased Amount:", purchasedAmount);
         console.log("Total Price:", totalPrice);
      }
   }

   // Check if book can be purchased again
   if (books.stock > 0) {
      console.log("You can purchase more! There are", books.stock, "Books Left");
   } else {
      console.log("Book is out of stock.");
   }
}

// Usage
purchaseBook(listOfBook[2], 3, 5);
