function purchaseBook(bookTitle, author, originalPrice, discountPercentage, taxPercentage, isDiscount, stock, purchasedAmount) {
   // Constants
   const governmentTax = 0.1; // 10% tax

   // Calculations
   let discountAmount = 0;
   let priceAfterDiscount = 0;
   if (isDiscount == true) {
      discountAmount = originalPrice * (discountPercentage / 100);
      priceAfterDiscount = originalPrice - discountAmount;
   } else {
      discountAmount = 0;
      priceAfterDiscount = originalPrice;
   }

   let taxAmount = priceAfterDiscount * (taxPercentage / 100);
   let priceAfterTax = priceAfterDiscount + taxAmount;
   let governmentTaxAmount = priceAfterTax * governmentTax;
   let priceAfterGovernmentTax = priceAfterTax + governmentTaxAmount;

   let stockAvailable = stock;

   // Calculate total price based on available stock
   let totalPrice = 0;
   for (let i = 0; i < purchasedAmount; i++) {
      if (stock > 0) {
         totalPrice += priceAfterGovernmentTax;
         stock--;
      } else {
         break;
      }
   }

   // Display
   console.log("Book Title:", bookTitle);
   console.log("Author:", author);
   console.log("Original Price:", originalPrice);
   if (isDiscount == true) {
      console.log("Your Book is Get Discount");
      console.log("Discount Percentage:", discountPercentage + "%");
      console.log("Amount of Discount:", discountAmount);
      console.log("Price After Discount:", priceAfterDiscount);
   } else {
      console.log("Your Book Is not Get Discount");
      console.log("Price is Normal:", priceAfterDiscount);
   }
   console.log("Tax Percentage:", taxPercentage + "%");
   console.log("Amount of Tax:", taxAmount);
   console.log("Price After Tax:", priceAfterTax);
   console.log("Government Tax: 10%");
   console.log("Amount of Government Tax:", governmentTaxAmount);
   console.log("Price After Government Tax:", priceAfterGovernmentTax);
   if (purchasedAmount > stockAvailable) {
      console.log("Purchased Amount:", purchasedAmount);
      console.log("You can only Purchase", stockAvailable, "Books");
      console.log("Total Price:", totalPrice);
   } else {
      console.log("Purchased Amount:", purchasedAmount);
      console.log("Total Price:", totalPrice);
   }

   // Check if book can be purchased again
   if (stock > 0) {
      console.log("You can purchase more! There are", stock, "Books Left");
   } else {
      console.log("Book is out of stock.");
   }
}

// Usage
purchaseBook("The Art of Thinking Clearly", "Rolf Dobeli", 20000, 10, 10, false, 5, 2);
