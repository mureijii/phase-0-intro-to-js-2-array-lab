// Write your solution here!
// Define the initial array
const cats = ["Milo", "Otis", "Garfield"];

// Destructive functions
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive functions
function appendCat(name) {
  return [...cats, name];  // Creates a new array with the added cat
}

function prependCat(name) {
  return [name, ...cats];  // Creates a new array with the cat added at the start
}

function removeLastCat() {
  return cats.slice(0, -1);  // Returns a new array without the last cat
}

function removeFirstCat() {
  return cats.slice(1);  // Returns a new array without the first cat
}

// Ensure functions are accessible for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};
