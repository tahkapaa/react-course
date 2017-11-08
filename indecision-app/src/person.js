export const isAdult = (age) => age >= 18 ? true : false;

export const canDrink = (age) => isAdult(age);