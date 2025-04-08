const people = [
    { first: "Albert", last: "Einstein", yearBorn: 1879, yearPassed: 1955 },
    { first: "Marie", last: "Curie", yearBorn: 1867, yearPassed: 1934 },
    { first: "Isaac", last: "Newton", yearBorn: 1643, yearPassed: 1727 },
    { first: "Leonardo", last: "da Vinci", yearBorn: 1452, yearPassed: 1519 },
    { first: "Galileo", last: "Galilei", yearBorn: 1564, yearPassed: 1642 },
    { first: "Ada", last: "Lovelace", yearBorn: 1815, yearPassed: 1852 },
    { first: "Nikola", last: "Tesla", yearBorn: 1856, yearPassed: 1943 },
    { first: "Florence", last: "Nightingale", yearBorn: 1820, yearPassed: 1910 },
    { first: "Charles", last: "Darwin", yearBorn: 1809, yearPassed: 1882 },
    { first: "Alexander", last: "Hamilton", yearBorn: 1755, yearPassed: 1804 }
];

// Array.prototype.filter()
// 1: filter the list of people that born in the 1800's
const eighteen = people.filter(person => 
    person.yearBorn >= 1800 && person.yearBorn <= 1900
);

console.log(eighteen);

// Array.prototype.map()
// 2: give us an array of the inventory first and last names
const fullNames = people.map(person => 
    `${person.first} ${person.last}`
);

console.log(fullNames)

// Array.prototype.sort()
// 3: sort the people by birthdate, oldest to youngest
// const ordered = people.sort(function(a, b) {
//     if(a.yearBorn > b.yearBorn) {
//         return 1;
//     }else {
//         return -1;
//     }
// })
const ordered = people.sort((a, b) => a.yearBorn > b.yearBorn ? 1 : -1);

console.table(ordered);

//Array.prototype.reduce()
//4: how many years did all the people live?
const totalYears = people.reduce((total, person) => {
    return total + (person.yearPassed - person.yearBorn)
}, 0);

console.log(totalYears);

//5: sort the people by yeas lived
const oldest = people.sort((a, b) => {
    const lastPerson = a.yearPassed - a.yearBorn;
    const nextPerson = b.yearPassed - b.yearBorn;

    (lastPerson > nextPerson) ? -1 : 1;
     
});

console.table(oldest);

//6:create a list of Boulvards in Paris that contains 'de' anywhere in the name
//https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));

// console.log(de);

//7: sort the names Alphabatically by last name

const names = [
    "Albert, Einstein",
    "Marie, Curie",
    "Isaac, Newton",
    "Leonardo, da Vinci",
    "Galileo, Galilei",
    "Ada, Lovelace",
    "Nikola, Tesla",
    "Florence, Nightingale",
    "Charles, Darwin",
    "Alexander, Hamilton",
    "William, Shakespeare",
    "Ludwig, Beethoven",
    "Cleopatra, Philopator",
    "Aristotle, of Stagira",
    "Socrates, of Athens",
    "Thomas, Edison",
    "George, Washington",
    "Abraham, Lincoln",
    "Theodore, Roosevelt",
    "Martin, Luther King Jr.",
    "Mahatma, Gandhi",
    "Christopher, Columbus",
    "Frida, Kahlo",
    "Pablo, Picasso",
    "Vincent, van Gogh",
    "Wolfgang, Mozart",
    "Johannes, Kepler",
    "Edgar, Allan Poe",
    "Mark, Twain",
    "Jane, Austen"
];

const alpha = names.sort(function (lastOne, nextOne) {
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');

    return alast > blast ? 1 : -1;   
})

console.table(alpha);

//8: Reduce Exercise
// Sum up the instances of each of these

const vehicles = [
    "Car",
    "Truck",
    "Motorcycle",
    "Bicycle",
    "Car",
    "Bus",
    "Scooter",
    "Truck",
    "Van",
    "Bicycle",
    "Motorcycle",
    "Car",
    "Bus",
    "Van",
    "Scooter"
];

const transportation = vehicles.reduce((obj, item) => {
    
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation)


