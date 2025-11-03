const letters = ["a", "b"];
const newLet = letters.map(a=> a.toUpperCase());
console.log(newLet);

const celsius = [0, 10];
const fahrenheit = celsius.map(a => a * 9/5 + 32);
console.log(fahrenheit);

const words = ["hi", "cat"];
const length = words.map(a => a.length);
console.log(length);