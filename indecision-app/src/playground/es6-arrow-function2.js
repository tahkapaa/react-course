// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a+b;
}

console.log(add(55, 1));

// this keyword - no longer bound

const user = {
    name: 'Pasi',
    cities: ['Tampere', 'Lempäälä', 'Orimattila'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
    // numbers - array of number
    // multilyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((n) => n*this.multiplyBy);
    }
};

console.log(multiplier.multiply());