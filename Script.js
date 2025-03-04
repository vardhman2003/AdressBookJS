import AddressBook from './AddressBook.js';

let myAddressBook = new AddressBook();

myAddressBook.createContact("John", "Doe", "123 Main St", "Somewhere", "CAGV", "90018", "555-6388", "john.doe@example.com");
myAddressBook.createContact("Jane", "Smith", "456 Oak St", "Anywhere", "TX", "75001", "555-6745", "jane.smith@example.com");

myAddressBook.displayContacts();

myAddressBook.createContact("John", "Doe", "123 Main St", "Somewhere", "CAGV", "90018", "555-6388", "john.doe@example.com");

myAddressBook.displayContacts();

myAddressBook.editContact("John", "Doe", { phoneNumber: "555-9999", city: "New City" });

myAddressBook.displayContacts();

myAddressBook.createContact("John", "Doe", "123 Main St", "Somewhere", "CAGV", "90018", "555-6388", "john.doe@example.com");

myAddressBook.displayContacts();

myAddressBook.deleteContact("John", "Doe");

myAddressBook.displayContacts();

myAddressBook.createContact("John", "Doe", "123 Main St", "Somewhere", "CAGV", "90018", "555-6388", "john.doe@example.com");
myAddressBook.createContact("Jane", "Smith", "456 Oak St", "Anywhere", "TX", "75001", "555-6745", "jane.smith@example.com");

console.log(`Total Contacts: ${myAddressBook.getContactCount()}`);

myAddressBook.deleteContact("John", "Doe");

console.log(`Total Contacts: ${myAddressBook.getContactCount()}`);

myAddressBook.createContact("John", "Doe", "123 Main St", "Somewhere", "CAGV", "90018", "555-6388", "john.doe@example.com");
myAddressBook.createContact("Jane", "Smith", "456 Oak St", "Anywhere", "TX", "75001", "555-6745", "jane.smith@example.com");
myAddressBook.createContact("John", "Doe", "789 Elm St", "Elsewhere", "NY", "10001", "555-1234", "john.doe@newmail.com"); // Duplicate

myAddressBook.displayContacts();
console.log(`Total Contacts: ${myAddressBook.getContactCount()}`);

myAddressBook.createContact("John", "Doe", "123 Main St", "Los Angeles", "CA", "90018", "555-6388", "john.doe@example.com");
myAddressBook.createContact("Jane", "Smith", "456 Oak St", "Dallas", "TX", "75001", "555-6745", "jane.smith@example.com");
myAddressBook.createContact("Emily", "Clark", "789 Pine St", "Los Angeles", "CA", "90025", "555-7890", "emily.clark@example.com");

console.log("People in Somewhere:");
console.log(myAddressBook.searchByCity("Somewhere"));

console.log("People in CAGV:");
console.log(myAddressBook.searchByState("CAGV"));

myAddressBook.createContact("John", "Doe", "123 Main St", "Los Angeles", "CADS", "90018", "555-6388", "john.doe@example.com");
myAddressBook.createContact("Jane", "Smith", "456 Oak St", "Dallas", "TXCV", "75001", "555-6745", "jane.smith@example.com");
myAddressBook.createContact("Emily", "Clark", "789 Pine St", "Los Angeles", "CAGD", "90025", "555-7890", "emily.clark@example.com");
myAddressBook.createContact("Michael", "Brown", "987 Elm St", "Austin", "TXCV", "73301", "555-4321", "michael.brown@example.com");

//All city and person
console.log("View Persons by City:");
console.log(myAddressBook.viewPersonsByCity());

console.log("View Persons by State:");
console.log(myAddressBook.viewPersonsByState());

console.log("\nBefore Sorting:");
myAddressBook.displayContacts();

console.log("\nAfter Sorting:");
myAddressBook.sortContactsByName();

console.log("\nContact Count:", myAddressBook.getContactCount());

console.log("\nSearching in Los Angeles:", myAddressBook.searchByCity("Los Angeles"));
console.log("\nPersons by State:", myAddressBook.viewPersonsByState());
