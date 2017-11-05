
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    };

    getGreeting() {
        return `Hi. I am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major = 'Undecided') {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return this.major != 'Undecided';
    }

    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}`;
        }
        return greeting;
    }
}


const me = new Student('Pasi', 42, 'Computer Science');
console.log(me);
console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Person();
console.log(other);
console.log(other.getDescription());
console.log(other.getGreeting());

const luckyOne = new Traveller('Laura', '40', 'Helsinki');
console.log(luckyOne);
console.log(luckyOne.getDescription());
console.log(luckyOne.getGreeting());
