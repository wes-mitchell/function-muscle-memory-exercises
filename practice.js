// Practice: Best in Show
// Write a function that takes a string of a dog breed as an argument (like 'border collie')
// Have the function return the value of "My favorite dog breed is schnauzer" if an argument of "schnauzer" is provided.
// Store the return value of the function into a variable. (e.g. const myFavorite = someFunction())
// Log the string of "When it comes to pets," plus the returned value of the function.
// If, and only if, an argument value of "meow" is provided to the function, it should return the string "I like cats".

const favoriteDog = (dogBreed) => {
  if (dogBreed !== "meow") {
  return `my favorite dog breed is ${dogBreed}!`
  } 
  else 
  {
    return `I like cats.`
  }
} 
const myFavorite = favoriteDog("weenie")
const kitty = favoriteDog("meow")

console.log(myFavorite)
console.log(kitty);

// In this exercise, you are going to define more than one parameter for functions.

// Write a function named add that returns the sum of two numbers.
// Log the result of the add function.
// Modify the function to return the sum of three numbers.
// If the values of 17, 4, and 11 are provided as arguments, then the function must evaluate to 32.

const add = (num1, num2, num3) => {
  return num1 + num2 + num3
}

console.log(add(17, 4, 11));

// Create a function named go that takes 2 arguments:
// direction (forwards, backwards, etc.)
// speed (mph).
// The function, when invoked, will log out the following message format in the console:
// The car is moving forwards at 45 mph.
// The car is moving backswards at 8 mph.
// The car is moving in circles at 12 mph.
// Add a condition inside the function to check if the speed is greater than 75 mph. If it is, add an additional message of SLOW DOWN!
// Example: The car is moving forward at 82 mph. SLOW DOWN!

const go = (direction, speed) => {
  if (speed > 75) {
    console.log(`The car is moving ${direction} at ${speed} mph. SLOW DOWN!`)
  } else
  {
    console.log(`The car is moving ${direction} at ${speed} mph.`)
  }
}

go("backwards", 98)
go("forwards", 15)

// Design a function named evenOrOdd that takes a single number as an argument.
// It should return the string "Even" if the number is evenly divisible by two.
// It should return the string "Odd" if the number is not evenly divisible by two.
// Log the result of the function.
// Exploration Tasks
// Create an array of numbers outside the function. Some even, some odd. After the function is defined, iterate the array of numbers with a for..of loop, and invoke the evenOrOdd function with each number as the argument.
// What happens when you pass the argument value of 0?

const evenOrOdd = (number) => {
  if (number % 2 === 0) {
  return 'Even' 
  } 
  else
  {    
  return 'Odd'
  }
}

console.log(evenOrOdd(0)); // interesting?
console.log(evenOrOdd(24))

const numArr = [1, 4, 16, 13, 17, 26, 30]
  for (const num of numArr) {
    console.log(evenOrOdd(num))
}