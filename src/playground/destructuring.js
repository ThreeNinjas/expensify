/* const person = {
    name: 'Jason',
    age: 39,
    location: {
        city: 'Gretna',
        temp: 71
    }
}

const {name : firstName='Anonymous', age} = person

console.log(`${firstName} is ${age}`)

const {temp: temperature, city} = person.location

console.log(`It's ${temperature} in ${city}`) */

/* const book = {
    title: 'Life',
    author: 'Richard Fortey',
    publisher: {
        name: 'Alfred K. Knopf'
    }
}

const {name: publisherName='Self-Published'} = book.publisher

console.log(publisherName) */


const address = ['236 Willowbrook Dr', 'Gretna', 'LA', '70056']

const [, city, state] = address

console.log(`You are in ${city}, ${state}.`)