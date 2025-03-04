import Contact from './contact.js';

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    displayContacts() {
        if (this.contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            this.contacts.forEach(contact => {
                console.log(contact.getContactInfo());
            });
        }
    }

    createContact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        try {
            let contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
            this.addContact(contact);
            console.log(`Contact added: ${contact.getFullName()}`);
        } catch (error) {
            console.error("Error adding contact:", error.message);
        }
    }

    findContact(firstName, lastName) {
        return this.contacts.find(contact => 
            contact.firstName === firstName && contact.lastName === lastName
        );
    }

    editContact(firstName, lastName, newDetails) {
        let contact = this.findContact(firstName, lastName);
        if (contact) {
            Object.assign(contact, newDetails);
            console.log(`Contact updated: ${contact.getFullName()}`);
        } else {
            console.log("Contact not found.");
        }
    }
}

export default AddressBook;
