const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------';

// Only change below this line

const owed = (parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2); // Calculate owed amount
const leo = `${leoName} ${leoSurname.trim()} (Owed: R${Math.abs(parseFloat(leoBalance)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, '.')})`;
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R${Math.abs(parseFloat(sarahBalance)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, '.')})`;
const total = `Total amount owed: R${Math.abs(owed).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }).replace(/,/g, '.')}`;
const result = `${leo}\n${sarah}\n\n${divider}\n${total}\n${divider}`;

console.log(result);

