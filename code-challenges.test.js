// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// Pseudocode
// Input: String 
// Output: String with coded message
// Function name: codedMessage
// Process: replace letters in the input string using the .replace method to replace all instances of the letters "a", "e", "i", and "o" (both uppercase and lowercase using regex and the case insensitive property and global property /ig) in the input string with the numbers 4, 3, 1, and 0 and return the modified string 

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("takes in a string and returns a string with a coded message", () => {
        expect(codedMessage(secretCodeWord1)).toStrictEqual("L4ck4d41s1c4l")
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        expect(codedMessage(secretCodeWord2)).toStrictEqual("G0bbl3dyg00k")
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        expect(codedMessage(secretCodeWord3)).toStrictEqual("3cc3ntr1c")
         const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
    })
})

// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns a string with a coded message

// ● codedMessage › takes in a string and returns a string with a coded message

//   ReferenceError: codedMessage is not defined

// b) Create the function that makes the test pass.

 const codedMessage = (string) =>  {
 return string.replace(/a/ig, "4").replace(/e/ig, "3").replace(/i/ig, "1").replace(/o/ig, "0")
 }
    
//  PASS  ./code-challenges.test.js
//   codedMessage
//     ✓ takes in a string and returns a string with a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.149 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.69s.

// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// Pseudocode
// Input: array of words and a single letter
// Output: array 
// Function name: wordsThatIncludes
// Process: create a function that takes in 2 arguments (1 array of words and 1 variable of a single letter). Using the .filter method on the array we create a new array of all the words containing the letter variable. To be case insensitive, we use the .toLowerCase inside the .filter method to convert the words in the array to lowercase and then compare them to the letter variable using .includes and the letter as the argument for comparison. This will return an array of all the words containing the letter variable (lowercase and uppercase).

// a) Create a test with expects statement using the variable provided.

describe("wordsThatIncludes", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
         const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        expect(wordsThatIncludes(fruitArray, filterLetterA)).toStrictEqual(["Mango", "Apricot", "Peach"])
        const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        expect(wordsThatIncludes(fruitArray, filterLetterE)).toStrictEqual(["Cherry", "Blueberry", "Peach"])
        const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
    })
})

// FAIL  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a string with a coded message (3 ms)
// wordsThatIncludes
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// ● wordsThatIncludes › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ReferenceError: wordsThatIncludes is not defined


// b) Create the function that makes the test pass.

const wordsThatIncludes = (array, filterLetter) => {
    return array.filter(word => word.toLowerCase().includes(filterLetter))
}

// PASS  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a string with a coded message (1 ms)
// wordsThatIncludes
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.153 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.63s.
// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
// 
// Pseudocode
// Input: array of 5 numbers
// Output: boolean (true or false)
// Function name: fullHouse
// Process: take an array of cards as an argument and use .reduce method on the array to create an object called counts that contains the number of times each card appears in the array. The result of the counts variable will be used in  2 additional variables to return if the object values have 3 of a kind (hasThree)or 2 pairs(hasPair) and return true or false if the object has both using the logical AND operator.

describe("fullHouse", () => {
        it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullHouse(hand1)).toStrictEqual(true)
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        expect(fullHouse(hand2)).toStrictEqual(false)
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        expect(fullHouse(hand3)).toStrictEqual(false)
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(fullHouse(hand4)).toStrictEqual(true)
        const hand4 = [7, 2, 7, 2, 7]
        // Expected output: true
    })
})

// FAIL  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a string with a coded message (1 ms)
// wordsThatIncludes
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)
// fullHouse
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a full house

// ● fullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house

//   ReferenceError: fullHouse is not defined


// b) Create the function that makes the test pass.

// This problem took a long time to solve. I had many blockers and each blocker led to a ton of tabs opened of google searches. Eventually I landed on the .reduce method and this resource https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce that eventually led me to understand that I can make it create an object after the return on line 159
const fullHouse = (handArr) => {
    const counts = handArr.reduce((total, card) => {
      total[card] = (total[card] || 0) + 1
      return total
    },
    {})//<--this line creates the object that contains the number of times each card appears in the array which I use for the following variables 
        // at this point in the code before I used the Object.values I used console.log(counts) and was able to see object values as such { '3': 2, '5': 3 } from this point i just had to figure out how to return the boolean value of the object which led to using the .includes method.
    const hasThree = Object.values(counts).includes(3)
    const hasPair = Object.values(counts).includes(2)
    return hasThree && hasPair
  }
   
    
//     PASS  ./code-challenges.test.js
//     codedMessage
//       ✓ takes in a string and returns a string with a coded message (1 ms)
//     wordsThatIncludes
//       ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
//     fullHouse
//       ✓ takes in an array of 5 numbers and determines whether or not the array is a full house
  
//   Test Suites: 1 passed, 1 total
//   Tests:       3 passed, 3 total
//   Snapshots:   0 total
//   Time:        0.152 s, estimated 1 s
//   Ran all test suites.
//   ✨  Done in 0.67s.