'use strict';

// arguments object - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments);
    return a + b;
};

console.log(add(55, 1));

// this keyword - no longer bound

var user = {
    name: 'Pasi',
    cities: ['Tampere', 'Lempäälä', 'Orimattila'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

// Challenge are

var multiplier = {
    // numbers - array of number
    // multilyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (n) {
            return n * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
