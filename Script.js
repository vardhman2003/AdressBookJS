// script.js

import Contact from './contact.js';  // Importing the Contact class from contact.js

// Create an empty address book array
let addressBook = [];

// Function to add a contact to the address book
function addContact(contact) {
    addressBook.push(contact);
}

// Function to display all contacts
function displayContacts() {
    addressBook.forEach(contact => {
        console.log(contact.getContactInfo());
    });
}

// Create a couple of sample contacts
let contact1 = new Contact("John", "Doe", "123 Main St", "Somewhere", "CA", "90001", "555-1234", "john.doe@example.com");
let contact2 = new Contact("Jane", "Smith", "456 Oak St", "Anywhere", "TX", "75001", "555-5678", "jane.smith@example.com");

// Add contacts to the address book
addContact(contact1);
addContact(contact2);

// Display all contacts in the console
displayContacts();
