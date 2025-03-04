import Contact from './contact.js';

let addressBook = [];

function addContact(contact) {
    addressBook.push(contact);
}

function displayContacts() {
    addressBook.forEach(contact => {
        console.log(contact.getContactInfo());
    });
}

try {
    let contact1 = new Contact(
        "John", 
        "Doe", 
        "123 Main St", 
        "Somewhere", 
        "CAGV", 
        "90018",  // Valid zip code (5-digit zip)
        "555-6388",  // Valid phone number (7 digits)
        "john.doe@example.com"
    );
    addContact(contact1);
} catch (error) {
    console.error("Error adding contact:", error.message);
}

try {
    let contact2 = new Contact(
        "Jane", 
        "Smith", 
        "456 Oak St", 
        "Anywhere", 
        "TXtuy", 
        "75001",  
        "555-6745",  
        "jane.smith@example.com"
    );
    addContact(contact2);
} catch (error) {
    console.error("Error adding contact:", error.message);
}

displayContacts();
