import Contact from './contact.js';

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        let isDuplicate = this.contacts.some(existingContact => 
            existingContact.firstName === contact.firstName && existingContact.lastName === contact.lastName
        );

        if (isDuplicate) {
            console.log(`Duplicate entry found: ${contact.getFullName()} already exists.`);
        } else {
            this.contacts.push(contact);
            console.log(`Contact added: ${contact.getFullName()}`);
        }
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

    deleteContact(firstName, lastName) {
        let initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(contact => 
            !(contact.firstName === firstName && contact.lastName === lastName)
        );

        if (this.contacts.length < initialLength) {
            console.log(`Contact deleted: ${firstName} ${lastName}`);
        } else {
            console.log("Contact not found.");
        }
    }

    getContactCount() {
        return this.contacts.reduce(count => count + 1, 0);
    }
}

export default AddressBook;
