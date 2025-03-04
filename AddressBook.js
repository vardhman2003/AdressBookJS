import Contact from './contact.js';

class AddressBook {
    constructor() {
        this.contacts = [];
    }

    addContact(contact) {
        let isDuplicate = this.contacts.some(existingContact => 
            existingContact.getFullName().toLowerCase() === contact.getFullName().toLowerCase()
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
            this.contacts.forEach(contact => console.log(contact.toString()));
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
            contact.firstName.toLowerCase() === firstName.toLowerCase() && 
            contact.lastName.toLowerCase() === lastName.toLowerCase()
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
            !(contact.firstName.toLowerCase() === firstName.toLowerCase() && 
              contact.lastName.toLowerCase() === lastName.toLowerCase())
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

    searchByCity(city) {
        return this.contacts
            .filter(contact => contact.city.toLowerCase() === city.toLowerCase())
            .map(contact => contact.toString());
    }

    searchByState(state) {
        return this.contacts
            .filter(contact => contact.state.toLowerCase() === state.toLowerCase())
            .map(contact => contact.toString());
    }

    viewPersonsByCity() {
        return this.contacts.reduce((groupedByCity, contact) => {
            let cityKey = contact.city.toLowerCase();
            if (!groupedByCity[cityKey]) {
                groupedByCity[cityKey] = [];
            }
            groupedByCity[cityKey].push(contact.getFullName());
            return groupedByCity;
        }, {});
    }

    viewPersonsByState() {
        return this.contacts.reduce((groupedByState, contact) => {
            let stateKey = contact.state.toLowerCase();
            if (!groupedByState[stateKey]) {
                groupedByState[stateKey] = [];
            }
            groupedByState[stateKey].push(contact.getFullName());
            return groupedByState;
        }, {});
    }

    sortContactsByName() {
        this.contacts.sort((a, b) => a.getFullName().localeCompare(b.getFullName()));
        console.log("Contacts sorted alphabetically:");
        this.displayContacts();
    }

    sortContactsByCity() {
        this.contacts.sort((a, b) => a.city.localeCompare(b.city));
        console.log("Contacts sorted by City:");
        this.displayContacts();
    }

    sortContactsByState() {
        this.contacts.sort((a, b) => a.state.localeCompare(b.state));
        console.log("Contacts sorted by State:");
        this.displayContacts();
    }

    sortContactsByZip() {
        this.contacts.sort((a, b) => a.zip.localeCompare(b.zip));
        console.log("Contacts sorted by Zip:");
        this.displayContacts();
    }
}

export default AddressBook;
