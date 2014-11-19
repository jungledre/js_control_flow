var inputString = "building"
var newString = ""

function reverse(inputString) {
    for (count = inputString.length; count >= 0; count -= 1) {
        newString += (inputString.charAt(count));
    }
    return newString;
};

console.log(reverse(inputString));
