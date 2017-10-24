var nameVar = 'Pasi';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Miia';
nameLet = 'Julia'
// Does not work:
// let nameLet = 'Sara' 
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// Cannot reassign:
// const nameConst = 'Pasi';
console.log('NameConst', nameConst);

function getPetName() {
    const petName = 'Miuku';
    return petName;
}

const petName = getPetName();
console.log(petName);

// Block scoping
const fullName = 'Pasi T.';
let firstName;
if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);