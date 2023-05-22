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
// Input:
// Output:
// Function name:
// Process:

// a) Create a test with expect statements using the variables provided.

describe("codedMessage", () => {
    it("takes in a string and returns a string with a coded message", () => {
        expect(codedMessage(secretCodeWord1)).toStrictEqual("L4ck4d41s1c4l")
        // const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        expect(codedMessage(secretCodeWord2)).toStrictEqual("G0bbl3dyg00k")
        // const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        expect(codedMessage(secretCodeWord3)).toStrictEqual("3cc3ntr1c")
        // const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
    })
})

// FAIL  ./code-challenges.test.js
// codedMessage
//   ✕ takes in a string and returns a string with a coded message

// ● codedMessage › takes in a string and returns a string with a coded message

//   ReferenceError: codedMessage is not defined


// b) Create the function that makes the test pass.
 const secretCodeWord1 = "Lackadaisical"
 const secretCodeWord2 = "Gobbledygook"
 const secretCodeWord3 = "Eccentric"

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
        // const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        expect(wordsThatIncludes(fruitArray, filterLetterA)).toStrictEqual(["Mango", "Apricot", "Peach"])
        // const filterLetterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        expect(wordsThatIncludes(fruitArray, filterLetterE)).toStrictEqual(["Cherry", "Blueberry", "Peach"])
        // const filterLetterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
    })
})
const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const filterLetterA = "a"
const filterLetterE = "e"
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a string with a coded message (3 ms)
// wordsThatIncludes
//   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// ● wordsThatIncludes › takes in an array of words and a single letter and returns an array of all the words containing that particular letter

//   ReferenceError: wordsThatIncludes is not defined


// b) Create the function that makes the test pass.

const wordsThatIncludes = (array, letter) => {
    return array.filter(word => word.toLowerCase().includes(letter))
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

// Pseudocode
// Input:
// Output:
// Function name:
// Process:

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
        expect(fullHouse(hand1)).toStrictEqual(true)
        expect(fullHouse(hand2)).toStrictEqual(false)
        expect(fullHouse(hand3)).toStrictEqual(false)
        expect(fullHouse(hand4)).toStrictEqual(true)
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

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

const fullHouse = (handArr) => {
    const counts = handArr.reduce((acc, card) => {
      acc[card] = (acc[card] || 0) + 1
      return acc
    },
    {})
    const hasThreeOfAKind = Object.values(counts).includes(3)
    const hasPair = Object.values(counts).includes(2)
    return hasThreeOfAKind && hasPair
  }
    // console.log(fullHouse(hand1))
    // console.log(fullHouse(hand2))
    // console.log(fullHouse(hand3))
    // console.log(fullHouse(hand4))
    
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