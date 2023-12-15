const supermarketProducts = [
    { name: 'Apple', price: 2.5, quantity: 10, discount: 5 },
    { name: 'Banana', price: 1.0, quantity: 8, discount: 3 },
    { name: 'Milk', price: 3.0, quantity: 2, discount: 0 },
    { name: 'Bread', price: 2.0, quantity: 5, discount: 2 },
    { name: 'Eggs', price: 1.5, quantity: 12, discount: 1 },
    { name: 'Chicken', price: 5.0, quantity: 3, discount: 8 },
    { name: 'Rice', price: 4.0, quantity: 7, discount: 4 },
    { name: 'Tomatoes', price: 1.8, quantity: 6, discount: 2 },
    { name: 'Pasta', price: 2.2, quantity: 4, discount: 1 },
    { name: 'Cheese', price: 3.5, quantity: 3, discount: 5 },
    { name: 'Yogurt', price: 1.2, quantity: 8, discount: 0 },
    { name: 'Cereal', price: 2.8, quantity: 3, discount: 3 },
    { name: 'Orange Juice', price: 3.5, quantity: 2, discount: 2 },
    { name: 'Salmon', price: 8.0, quantity: 1, discount: 10 },
    { name: 'Cucumber', price: 1.0, quantity: 5, discount: 1 },
    { name: 'Chocolate', price: 2.5, quantity: 4, discount: 3 },
    { name: 'Shampoo', price: 4.0, quantity: 2, discount: 0 },
    { name: 'Toothpaste', price: 1.5, quantity: 3, discount: 1 },
    { name: 'Towel', price: 5.0, quantity: 1, discount: 5 },
    { name: 'Laundry Detergent', price: 3.0, quantity: 2, discount: 2 },
  ];


// 2(i)
supermarketProducts.forEach(element => {
    element.name
    console.log(element.name)
})


//2(ii)
var amount = []

supermarketProducts.forEach(element => {
   const total = (element.quantity * element.price)
    amount.push(total)
   }
 );
const totalAmount = amount.reduce((element, total) => element + total)

console.log("The total amount of items in the cart is " + totalAmount)


//2(iii)
var highestPrice = amount[0];
for (var i = 0; i < amount.length; i++) {
  if (amount[i] > highestPrice ) {
    highestPrice = amount[i];
  }
}
console.log("The highest ptice in the cart is " + highestPrice);


//2(iv)
var discountAmount = []

supermarketProducts.forEach(element => {
  const total = (element.quantity * element.price)
   const totalAmount = total - total * (element.discount/100)
    discountAmount.push(totalAmount)
   }
 );
const totaldiscountAmount = discountAmount.reduce((element, total) => element + total)

console.log("The total discount amount of items in the cart is " + totaldiscountAmount)