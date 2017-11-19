// Object destructuring

const person = {
    age: 42,
    location: {
        city: 'Lempäälä',
        temp: 2
    }
};

// const name = person.name; const age = person.age;

const {
    name: firstName = 'Anonymous',
    age
} = person;
console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}

// Array destructuring

const address = ['123 Jokutie', 'Tampere', 'Finland'];

const [,,
    state,
    county = 'Pirkanmaa'] = address;

console.log(`You are in ${county}, ${state}`);

const item = ['Coffee (hot)', '€2.00', '€2.50', '€2.75'];

const [product,,
    price] = item;

console.log(`A medium ${product} costs ${price}`);