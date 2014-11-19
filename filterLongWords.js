var maxLength = 4;
var words = ["Anil","Lenny","is","cool"];
var coolPerson = [];
count = 0;
for (count = 0; count < words.length; count+=1) {
    if (words[count].length <= maxLength) {
        coolPerson.push(words[count]);
    };
};
coolPerson = coolPerson.join(" ")
console.log(coolPerson)

//LENNY IS COOL TOOO!!! :p
