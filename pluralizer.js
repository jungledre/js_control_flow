// pluralizer.js

// Take an input like

// thing = "cat"
// count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog"..

thing = "cat"
count = "5"

if (count > 1) { thing += "s"}
console.log(count + " " + thing)
