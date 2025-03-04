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
