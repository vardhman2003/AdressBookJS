class Contact {
    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        if (!this.isValidName(firstName) || !this.isValidName(lastName)) {
            throw new Error("First and Last Name must start with a capital letter and have at least 3 characters.");
        }

        if (!this.isValidField(address) || !this.isValidField(city) || !this.isValidField(state)) {
            throw new Error("Address, City, and State must have at least 4 characters.");
        }

        if (!this.isValidZip(zip)) {
            throw new Error("Invalid Zip Code format.");
        }

        if (!this.isValidPhone(phoneNumber)) {
            throw new Error("Invalid Phone Number format.");
        }

        if (!this.isValidEmail(email)) {
            throw new Error("Invalid Email format.");
        }

        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    isValidName(name) {
        return /^[A-Z][a-zA-Z]{2,}$/.test(name);
    }

    isValidField(field) {
        return field && field.length >= 4;
    }

    isValidZip(zip) {
        return /^\d{5}(-\d{4})?$/.test(zip);  // Validates both 5-digit and 9-digit zip codes
    }

    isValidPhone(phone) {
        return /^(?:\(\d{3}\)\s?|\d{3}-)\d{3}-\d{4}$|^\d{3}-\d{4}$/.test(phone);  // Validates phone formats like 555-6388 or (555) 638-8888
    }

    isValidEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);  // Validates standard email format
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getFormattedAddress() {
        return `${this.address}, ${this.city}, ${this.state} ${this.zip}`;
    }

    getContactInfo() {
        return `${this.getFullName()} - ${this.getFormattedAddress()} - ${this.phoneNumber} - ${this.email}`;
    }
}

export default Contact;
