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
