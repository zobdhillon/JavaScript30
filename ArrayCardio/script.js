const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015},
]

const comments = [
    {text: 'Love this!', id: 523423},
    {text: 'Super good!', id: 823423},
    {text: 'You are the best!', id: 2039842},
    {text: 'Ramen in my fav food ever!', id: 123523},
    {text: 'Nice Nice Nice!', id: 523428},
]

// Some and every Checks
//Array.prototype.some() // is atleast one person 19?
// const isAdult = people.some(function(person) {
//     const currenyYear = new Date().getFullYear();
//     if(currenyYear - person.year >= 18) {
//         return true;
//     }
// })

// console.log(isAdult);

const isAdult = people.some(person => 
    ((new Date().getFullYear()) - person.year) >= 19 
);

console.log(isAdult);

// Array.prototype.every() // is everyone 19?
const allAdult = people.every(person => 
    ((new Date().getFullYear()) - person.year) >= 19 
);

console.log(allAdult);

//Array.prototype.find()
//find is like filter, but instead returns just the one you are looking for 
//find is like filter, but instead returns just the one you are looking for
//find the comment with the id of 823423
const comment = comments.find((comment) => (comment.id === 823423) )
console.log(comment);


//Array.prototype.findIndex()
//find the comment with this id
//delete the comment with the id of 823423
const index = comments.findIndex((comment) => (comment.id === 123523) )
console.log(index);

comments.splice(index, 1);
console.log(comments)