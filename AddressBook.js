import Contact from './contact.js';

class AddressBook {
    constructor() {
        this.contacts = [];  
    }

    //Add a new contact to the address book
    addContact(contact) {
        this.contacts.push(contact);
    }

    //Display all contacts in the address book
    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            this.contacts.forEach(contact => {
                console.log(contact.getContactInfo());
            });
        }
    }

    //Create a new contact and add it to the address book
    createContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        try {
            let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
            this.addContact(contact);
            console.log(`Contact added: ${contact.getFullName()}`);
        } catch (error) {
            console.error("Error adding contact:", error.message);
        }
    }
}

export default AddressBook;
