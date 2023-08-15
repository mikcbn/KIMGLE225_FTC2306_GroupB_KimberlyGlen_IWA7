// Define variables with sample values
const leoName = "Leo";
const leoSurname = "Musvaire";
const leoBalance = 9394.00;

const sarahName = "Sarah";
const sarahSurname = "Kleinhans";
const sarahBalance = 4582.20;

const divider = "----------------------------------";

// Create formatted messages for Leo and Sarah
const leoMessage = `${leoName} ${leoSurname} (Owed: R ${leoBalance.toFixed(2)})`;
const sarahMessage = `${sarahName} ${sarahSurname} (Owed: R ${sarahBalance.toFixed(2)})`;

// Calculate the total owed amount and create the corresponding message
const totalOwed = leoBalance + sarahBalance;
const totalOwedMessage = `Total amount owed: R ${totalOwed.toFixed(2)}`;

// Combine the messages and divider for the final result
const result = `${leoMessage}\n${sarahMessage}\n\n${divider}\n${totalOwedMessage}`;

// Output the result to the console
console.log(result);


