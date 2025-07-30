

function uppg8(){
const persons = [
    {name: 'Anna', age: 20},
    {name: 'Björn', age: 50},
    {name: 'Cecilia', age: 40},
    {name: 'David', age: 35},
    {name: 'Eva', age: 67}
]

function personsOver30(people){
people.map(person => person.age > 30 ? console.log(person.name) : null);
}

personsOver30(persons);
}

module.exports = { uppg8 };