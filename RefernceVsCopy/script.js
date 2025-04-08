//Start with string, number and boolean
let name = 'zob';
let name2 = name;
console.log(name, name2);
name = 'zobia';
console.log(name, name2);

//lets say we have an array
const players = ['Wes', 'Sarah' ,'Rayan', 'poppy'];

//and we want to make a copy of it
// let team = players;
//you might think we can just do something like this
// team[3] = 'lux';

//however what happens when we update that array

//now here is the problem

//oh no, we have edited the original array too

//why? its because this is an array refrence, not an array copy.They both point to the same array

//so, how do we fix this? we take a copy instead
const team2 = players.slice();

//one day

//or create a new array and concat the old one in
const team3 = [].concat(players);

//or use the new ES6 Spread
const team4 = [...players];


const team5 = Array.from(players);

//now if we update it., the original one isnt changed

//the same things goes for objects, lets say we have a person object
const person = {
    name : 'Zobia',
    age: 24,
}

//and think we make a copy
const captain = person;
captain.number = 99;
console.log(person);

//how do we take a copy instead?
const cap2 = Object.assign({}, person, {number: 99})
console.log(cap2);

//we can also use the spread operator
let person2 = {...person};

console.log(person2)

//things to note--this is only 1 level deep--both for arrays and objects.lodash has cloneDeep method, but you should think twice before using it.

const zob = {
    name: 'zob',
    age: 24,
    social: {
        fb: 'yes',
        insta: 'yes',
    }
}

console.log(zob);

const dev = Object.assign({}, zob);
console.log(dev);

dev.social.fb = 'no';

console.log(zob);

//now this will change the value from yes to no, bcz its the 2nd level and object.assign only works for one level

//cheap low level method can be this just to know , not to apply

const dev2 = JSON.parse(JSON.stringify(zob))