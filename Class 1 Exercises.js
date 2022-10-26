/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)
const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;

const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER/2)**2)
const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER/2)**2)

console.log("Small Pizza Area = ", smallPizzaArea)
console.log("Large Pizza Area = ", largePizzaArea)


// 2. What is the cost per square inch of each pizza?
const SMALL_PIZZA_COST = 16.99;
const LARGE_PIZZA_COST = 19.99;

let smallCostPerSquareInch = SMALL_PIZZA_COST/smallPizzaArea
let largeCostPerSquareInch = LARGE_PIZZA_COST/smallPizzaArea

console.log("Cost per square inch for small pizza = ", smallCostPerSquareInch.toFixed(2))
console.log("Cost per square inch for large pizza = ", largeCostPerSquareInch.toFixed(2))


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const card = Math.ceil(Math.random() * 13);
console.log("Random card drawn = ", card)


// 4. Draw 3 cards and use Math to determine the highest card
const firstDraw = Math.ceil(Math.random() * 13);
console.log("First Draw = ", firstDraw)

const secondDraw = Math.ceil(Math.random() * 13);
console.log("Second Draw = ", secondDraw)

const thirdDraw = Math.ceil(Math.random() * 13);
console.log("Third Draw = ", thirdDraw)

const HighestCard = Math.max(firstDraw, secondDraw, thirdDraw)
console.log("Highest value card = ", HighestCard)



/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.
const firstName = "Frank";
const lastName = "Lampard";
const streetAddress = "1234 Yale Ave";
const city = "Seattle";
const state = "WA";
const zipCode = "98119";

const fullAddress = 
`
 ${firstName} ${lastName}
 ${streetAddress}
 ${city}, ${state} ${zipCode}
`
console.log("Full Address is: ", fullAddress)



// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

//Split string at white spaces
const fullAddressArr = fullAddress.split(/(\s+)/);

// get index of firstName
const index = fullAddress.indexOf(`${firstName}`);

// Use index to extract Name
const AddressfirstName = fullAddressArr[index];
console.log("First Name = ", AddressfirstName)



/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
// const endDate = new Date(2019, 3, 1);
const startDate = new Date(2020, 1,1)
const endDate = new Date(2020, 4, 1)

const middleDate = new Date((startDate.getTime() + endDate.getTime())/2)
console.log("Middle Date = ", middleDate)