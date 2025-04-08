const dogs = [
    {name: 'Snickers', age: 2},
    {name: 'Hugo', age: 8},
]

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

//Regular
console.log('helle')

//Interpolated
console.log('hello! I am a %s string!', '❌')

//Styled
console.log('%c hello! I am styled string!', 'color:green; font-size: 50px')

//warning
console.warn('oh noooo!')

//Error:
console.error('Shit!')
//Info 
console.info('crocodiles eat 3-4 people per year')

//testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'that is wrong!')

//clear
console.clear();

//Viewing DOM Elements
console.log(p);
console.dir(p);

//Grouping Together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`this is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years`)
    console.groupEnd(`${dog.name}`)
})

//Counting
console.count('wes')
console.count('wes')
console.count('wes')
console.count('wes')
console.count('wes0')
console.count('wes1')
console.count('wes')
console.count('wes1')
console.count('wes0')
console.count('wes')
console.count('wes0')
console.count('wes')

//timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data')
    })

//table {
console.table(dogs)