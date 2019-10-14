# Software development practice exam.

This exam is to gauge your proficiency in writing code in Javascript.  It is administered in two parts and should
take you 1 to 2 hours to complete.

## Setup

You will need to set up development environment for running the enclosed files.
 - Install Node.js version 10+
 - Install the node package manager version 6+ (npm)

You can find instructions for your operating system at: https://nodejs.org/en/download/

### Local setup

After you have installed nodejs and npm, open your command line and navigate to the location you have cloned this project; Run:

```
npm install
```

This will add the test runner, `mocha`, and assertion library, `chai`. You can now run the tests in `test.js` with the
command `npm test`. At this point all tests will fail.

## General Advise

 - Create a new branch, `your-name`, and push your changed files there. When you are finished create a pull request
   with your solutions.
 - We have tried to make the expectations straight forward; there are no trick questions or brain teasers.
 - Neatness counts.

## Part 1, complete functions to pass tests.

Running `npm test` will revel 6 failing tests. Open the file `./src.js` and update the bodies of `findUniqueNumbers`,
`sortArray`, and `isPalindrome` until all the tests pass.

## Part 2, prime factors

Create a new file with a function: `primeFactors()`. Write a series of tests and implementation that takes a number and
returns an array of the prime factors of the that input. To run your new test file you will need to update the `scripts`
section of the `package.json` file. See the online documentation for mocha if you need more information.

Example tests:
 - primeFactors(1): `[]`
 - primeFactors(2): `[2]`
 - primeFactors(4): `[2, 2]`
