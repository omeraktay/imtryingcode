/*
Family Tree
-> Create a data structure to represent a family tree, where each person has information about 
their name, birthdate, and any other relevant details. Implement functions for adding family members, 
defining relationships (parent-child connections), and updating individual details.

-> Traversal and Descendants Display Functionality
Implement a traversal algorithm to navigate the family tree and identify all descendants of a chosen person.
Provide an option in the application's interface to input a person's name and display a list of all their descendants.
Note: you can set up simple tests that call a function that's not implemented (a function stub). 
Once the students implement the function, that test should run and pass. This lets them focus on the lesson and algorithm and have clear feedback.

-> Documentation: Provide comprehensive documentation for your code, 
explaining the purpose of each function, the data structure chosen for the family tree, and how to run the application. 
Include examples showcasing the descendant display functionality.
*/

class Person{
    constructor(name, birthDate){
        this.name = name;
        this.birthDate = birthDate;
        this.children = [];
    }
    addChild(child){
        this.children.push(child);
    }
}
class FamilyTree{
    constructor(){
        this.members = new Map();
    }
    // Add a new member
    addMembers(name, birthDate){
        if(this.members.has(name)){
            console.log(`${name} already in the family tree.`);
            return;
        }
        let person = new Person(name, birthDate);
        this.members.set(name, person);
        console.log(`${name} has been added to family tree.`);
    }
    // Define relationship between members
    defineRelationship(parentName, childName){
        let parent = this.members.get(parentName);
        let child = this.members.get(childName);
        if(!parent){
            console.group(`${parentName} not found.`)
            return;
        }
        if(!child){
            console.log(`${childName} not found.`);
            return;
        }
        parent.addChild(child);
        console.log(`${parentName} is parent of ${childName}`);
    }
    // Update a person's info
    updatePerson(oldName, newName, newBirthDate){
        let person = this.members.get(oldName);
        if(!person){
            console.log(`${oldName} not found in the family tree.`);
            return;
        }
        else{
            this.members.set(newName, newBirthDate);
            console.log(`${oldName} is updated to ${newName} and new birth date is ${newBirthDate}.`);
        }
    }
    // Find descendatns
    findDescendats(person){
        if(!this.members.has(person)){
            console.log(`Cannot find ${person}`);
            return;
        }
        const descendants = [];
        const queue = [...this.members.get(person).children];
        while(queue.length){
            let current = queue.shift();
            descendants.push(current.name);
            queue.push(...current.children);
        }
        return descendants;
    }
    // Find descendats with level
    findDescendantsWithLevel(person){
        if(!this.members.has(person)){
            console.log(`Cannot find ${person}`);
            return;
        }
        const descendants = [];
        const queue = [{person: this.members.get(person), level: 0}];
        while(queue.length){
            let { person, level } = queue.shift();
            for(let child of person.children){
                descendants.push({name: child.name, level: level +1});
                queue.push({person: child, level: level +1});
            }
        }
        return descendants;
    }
}

let familyTree = new FamilyTree();

familyTree.addMembers("Omer", "01.01.1930");
familyTree.addMembers("Ali", "02.02.1950");
familyTree.addMembers("Osman", "02.02.1955");
familyTree.addMembers("Mustafa", "03.03.1970");
familyTree.addMembers("Kemal", "03.03.1975");
familyTree.addMembers("Ayse", "03.03.1980");
familyTree.addMembers("Esra", "04.04.1995");

familyTree.defineRelationship("Omer", "Ali");
familyTree.defineRelationship("Omer", "Osman");
familyTree.defineRelationship("Ali", "Mustafa");
familyTree.defineRelationship("Ali", "Kemal");
familyTree.defineRelationship("Osman", "Ayse");
familyTree.defineRelationship("Mustafa", "Esra");

// familyTree.updatePerson("Ayse", "AyseGul", "03.03.1981");
// console.log(familyTree);

console.log(familyTree.findDescendats("Omer"));
console.log(familyTree.findDescendantsWithLevel("Omer"));