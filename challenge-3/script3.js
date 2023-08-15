const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------';

// Only change below this line

const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2); // Calculate owed amount
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(parseFloat(leoBalance)).toFixed(2)})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${Math.abs(parseFloat(sarahBalance)).toFixed(2)})`;
const total = `Total amount owed: R ${Math.abs(owed).toFixed(2)}`;
const result = `${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}`;

console.log(result);


