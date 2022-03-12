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

// For this exercise, you are going to utilize two functions; each function will have a single responsibility. The goal of the exercise is to convert an array of words into a sentence, but some of the words in the array should not be included in the sentence.

// Therefore, you need two functions.

// One function to filter out the unwanted words.
// One function to convert an array of words into a single sentence.
// Each function needs to return a value.
// The return value from one function needs to be passed to the other function.
// In the array of words below, filter out any word that starts with the letter k. With the remaining words, combine them all into a single string and log that string to the console.

const words = [
  "The", "killing", "complex", "houses",
  "married", "kittens", "and", "single",
  "soldiers", "and", "their", "kleptomaniacal",
  "families"
]
// words.filter(word => word.startsWtih('k'))

/* +
  Function to filter out `k` words
  (Google 'javascript startswith' to get started)
*/
const filterKWords = () => {
  return words.filter(word => !word.startsWith('k'))
}
/*
  Function to build a single string from the array
  (Google 'javascript combine all items in array' to get started)
*/
const concatenate = (arr) => {
  return arr.join(' ')
}

/*
  Invoke the filtering function and store its return value
*/
const sansK = filterKWords()
const string = concatenate(sansK)
/*
  Invoke the string building function, and pass the
  return value of the previous function as an argument
*/


console.log(string)

// Higher Order functions Practice (passing a function as an argument)

const twice = number => number * 2 // function to multiply paramter by 2

const twiceThree = twice(3)
console.log(twiceThree);

const timesFive = number => number *5 // function for multiplying a number by 5
const squareMe = number => number * number  // function for squaring a number

const doSomeMath = (number, operatorFunction) => {
  const result = operatorFunction(number)
  return result
}

let twosquared = doSomeMath(2, squareMe)
console.log(twosquared);

const number = 250
const by5 = doSomeMath(number, timesFive)
const squared  = doSomeMath(number, squareMe)
console.log(by5);
console.log(squared);

const numberCubed = number => number * number * number // function for cubing a number

// DEFINING CHORES exercise

const wes = {     // person object
  first: "Wes",
  last: "Mitchell"
}

const john = {
  first: "John",
  last: "Moler"
}

const karissa = {
  first: "Karissa",
  last: "Deiter"
}

const keggers = {
  first: "Kolonel",
  last: "Keggers"
}

const grocery = person => `${person.first} ${person.last} went to the grocery store`
const dishes = person => `${person.first} ${person.last} did the dishes`
const trash = person => `${person.first} ${person.last} enthusiastically took the trash out`
const bills = person => `${person.first} ${person.last} paid all the bills on time`
const drums = person => `${person.first} ${person.last} said screw all chores and played drums`
const clean = person => `${person.first} ${person.last} swept the house and made sure all surfaces were clean`
const bass = person => `${person.first} ${person.last} said screw all chores and played bass instead`



const dayPlanner = (person, chore, day) => {
  return `${chore(person)} and the day was ${day}.`
}
const busyDay = (chore1, chore2, chore3, person, day) => {
  return `On ${day}, ${chore1(person)}, ${chore2(person)}, ${chore3(person)}.`
}
// Now define a function that has three parameters. The purpose of each parameter is as follows:

// chore - A function that will perform a chore
// person - An object representing a perform. It should have a firstName and a lastName property.
// day - The weekday to perform the task (e.g. "Tuesday")
// We suggest you name this higher order function dayPlanner().

// The return value of dayPlanner should be a string in the following format, assuming the person object represents Yolanda Johnson, the chore was mowing the lawn, and the day was Thursday.

// "Yolanda Johnson mowed the lawn on Thursday."
// Log that output to the developer console.

console.log(dayPlanner(wes, drums, "Wednesday"));
console.log(dayPlanner(karissa, bass, "Saturday"));
console.log(dayPlanner(john, bills, "Monday"));
console.log(dayPlanner(keggers, grocery, "Thursday"));

console.log(busyDay(drums, bills, clean, wes, "Monday"));
console.log(busyDay(trash, bills, bass, keggers, "Saturday"));

const catchTuna = (num) => {
  const hooked = Math.random() * num
  if (hooked <= 1 ) {
    console.log(`Sven hooked at tuna! :)`)
  } else 
  {
    console.log(`Sven came up empty-handed. :(`);
  }

}

catchTuna(3)
catchTuna(5)
catchTuna(6)