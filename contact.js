// contact.js

class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    //Get full name of the contact
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    //Get the formatted address of the contact
    getFormattedAddress() {
        return `${this.address}, ${this.city}, ${this.state} ${this.zip}`;
    }

    //Get all contact details as a formatted string
    getContactInfo() {
        return `${this.getFullName()} - ${this.getFormattedAddress()} - ${this.phoneNumber} - ${this.email}`;
    }
}

export default Contact;
