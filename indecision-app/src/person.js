export const isAdult = (age) => age >= 18 ? true : false;

export const canDrink = (age) => isAdult(age);

const isSenior = (age) => age >= 65 ? true : false;

export default isSenior;