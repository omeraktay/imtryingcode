/*
Activity
Direct the students to complete this assignment:

Sorting Problem:
Create a data structure to represent the entries in a phone book. 
Each entry should include information like name, phone number, and any additional relevant details. 
Implement functions for adding, updating, and deleting entries in the phone book.

Sorting Functionality:
-> Implement sorting functionality to allow users to sort the phone book entries based on different criteria. 
-> Provide options for sorting by name, phone number, or any other relevant parameter.
-> Use appropriate algorithms for sorting, ensuring efficiency in handling a potentially large number of entries.

Documentation: Provide clear and concise documentation for your code, explaining the purpose of each function, 
the data structure used, and how to run the application. Include examples demonstrating the sorting capabilities.
*/

class PhoneBook{
    constructor(){
        this.entries = []
    }
    // Add a new person to phone book
    addPerson(name, phoneNumber, email){
        let entry = { name, phoneNumber, email };
        this.entries.push(entry);
    }
    // Update a person by name
    updatePerson(oldName, newName, newPhone, newEmail){
        let entry = this.entries.find(entry => entry.name === oldName);
        if(entry){
            entry.name = newName || entry.name;
            entry.phoneNumber = newPhone || entry.phoneNumber;
            entry.email = newEmail || entry.email;
            console.log(`${oldName} is updated to ${newName}, ${entry.phoneNumber}, ${entry.email}.`);
        }
        else{
            console.log(`${oldName} not found.`);
        }
    }
    // Delete a person by name
    deletePerson(person){
        let index = this.entries.findIndex(entry => entry.name === person);
        if(index !== -1){
            this.entries.splice(index, 1);
            console.log(`${person} has been deleted from phone book.`);
        }
        else{
            console.log(`${person} not found.`);
        }
    }
    // Find a person's info by name
    findPerson(person){
        let entry = this.entries.find(entry => entry.name === person);
        if(entry){
            return `Name: ${entry.name}, phone number: ${entry.phoneNumber}, email: ${entry.email}`;
        }
        else{
            return `Entry for ${person} not found.`;
        }
    }
    sortEntries(criteria = 'name') {
        if (!['name', 'phoneNumber', 'email'].includes(criteria)) {
            console.log("Invalid sorting criteria. Use 'name', 'phoneNumber', or 'email'.");
            return;
        }
        this.entries.sort((a, b) => a[criteria].localeCompare(b[criteria]));
        console.log(`Sorted by ${criteria}:`, this.entries);
    }

}

let phoneBook = new PhoneBook();

phoneBook.addPerson("Omer", "778-123-1234", "omer@gmail.com");
phoneBook.addPerson("Samet", "778-345-3456", "samet@gmail.com");
phoneBook.addPerson("Zeki", "778-234-2345", "zeki@gmail.com");
phoneBook.addPerson("Oguz", "778-456-4567", "oguz@gmail.com");
phoneBook.addPerson("Gurkan", "778-674-2352", "emre@gmail.com");

phoneBook.updatePerson("Oguz", "Osman", "236-789-7890", "osman@gmail.com");
// phoneBook.updatePerson("Gurkan", "Emre");
// phoneBook.updatePerson("Muhammet", "Ali");
phoneBook.deletePerson("Gurkan");
console.log(phoneBook.findPerson("Omer"));
console.log(phoneBook.findPerson("Samet"));
console.log(phoneBook.findPerson("Sukru"));

phoneBook.sortEntries(criteria = 'email');

//console.log(phoneBook);
