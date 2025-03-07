/*
Lesson 8: Degrees of separation

-> Problem: Degrees of Separation
Develop a data structure to represent a social network, where individuals are nodes, 
and relationships (friendships) are edges between nodes. Implement functions for adding individuals, 
establishing friendships, and updating individual details.

-> Degree of Separation Functionality
Create a method to calculate the degree of separation between two individuals in the social network. 
The degree of separation indicates the minimum number of friendships required to connect the two people.
Utilize appropriate algorithms, like breadth-first search (BFS), to efficiently determine the degree of separation.
Documentation: Provide clear documentation for your code, explaining the purpose of each function, the data structure 
chosen for the social network, and instructions on running the application. 
Include examples illustrating how to calculate degrees of separation.
*/

// Graph data structure 

//        (1)    +    (1)   +    (1)
// Omer -----> Osman ----> Zeki ----> Samet  =>   Degree of separation between Omer and Samet is 3.
//           (1) '--> Emre 
// Mustafa(in the network but not friend with anyone)  => There is no connection between Omer and Mustafa.

// To run the code use this command on your terminal: node social-network.js or simply click the 'Run Code' button

class SocialNetwork{
    constructor(){
        this.graph = new Map(); 
    }
    // Add a new person
    addPerson(person){
        if(this.graph.has(person)){ // Check if person already exists.
            console.log(`${person} already exists.`);
            return;
        }
        this.graph.set(person, new Set());
        console.log(`${person} has been added to network.`);
    }
    // Add friendship between individuals
    addFriendship(person1, person2){
        if(!this.graph.has(person1)){ // Check if person1 exists.
            console.log(`${person1} not found.`);
            return;
        }
        if(!this.graph.has(person2)){ // Check if person2 exists.
            console.log(`${person2} not found.`);
            return;
        }
        this.graph.get(person1).add(person2);
        this.graph.get(person2).add(person1);
        console.log(`${person1} and ${person2} are friends now.`);
    }
    // Update a person and frienship
    updatePerson(oldName, newName){
        if(!this.graph.has(oldName)){ // Check if the person (oldName) exists.
            console.log(`${oldName} not found.`);
            return;
        }
        if(this.graph.has(newName)){ // Check if the new name (newName) already exists.
            console.log(`${newName} already in the network.`);
            return;
        }
        let friends = this.graph.get(oldName);
        this.graph.delete(oldName);
        this.graph.set(newName, friends);
        for(let friend of friends){
            this.graph.get(friend).delete(oldName);
            this.graph.get(friend).add(newName);
        }
        console.log(`${oldName} has been updated to ${newName}.`);
    }
    // Find the degree of separation (use BFS)
    degreeOfSeparation(start, target){
        if(!this.graph.has(start)){ // Check if the starting person exists.
            console.log(`${start} not found.`);
            return;
        }
        if(!this.graph.has(target)){ // Check if the targeted person exists.
            console.log(`${target} not found.`);
            return;
        }
        let queue = [[start, 0]];
        let visited = new Set(); // Visit each friend just once
        visited.add(start);
        while(queue.length){
            let [ current, degree ] = queue.shift();
            if(current === target){
                return `Degree of separation is: ${degree}.`;
            }
            for(let friend of this.graph.get(current)){
                if(!visited.has(friend)){
                    visited.add(friend);
                    queue.push([friend, degree +1]);
                }
            }
        }
        return `No connection found between ${start} and ${target}.`;
    }
}

let socialNetwork = new SocialNetwork();

socialNetwork.addPerson("Omer"); // Omer has been added to network.
socialNetwork.addPerson("Osman"); // Osman has been added to network.
socialNetwork.addPerson("Zeki"); // Zeki has been added to network.
socialNetwork.addPerson("Samet"); // Samet has been added to network.
socialNetwork.addPerson("Emre"); // Emre has been added to network.
socialNetwork.addPerson("Mustafa"); // Mustafa has been added to network.

socialNetwork.addFriendship("Omer", "Osman"); //Omer and Osman are friends now.
socialNetwork.addFriendship("Osman", "Zeki"); //Osman and Zeki are friends now.
socialNetwork.addFriendship("Zeki", "Samet"); //Zeki and Samet are friends now.
socialNetwork.addFriendship("Osman", "Emre"); //Osman and Emre are friends now.

socialNetwork.updatePerson("Osman", "Oguz"); // Osman has been updated to Oguz.

console.log(socialNetwork.degreeOfSeparation("Omer", "Samet")); // Degree of separation is: 3.
console.log(socialNetwork.degreeOfSeparation("Omer", "Mustafa")); // No connection found between Omer and Mustafa.

socialNetwork.updatePerson("Ali", "Oguz"); // Ali not found.
console.log(socialNetwork);
/*
SocialNetwork {
  graph: Map(6) {
    'Omer' => Set(1) { 'Oguz' },
    'Zeki' => Set(2) { 'Samet', 'Oguz' },
    'Samet' => Set(1) { 'Zeki' },
    'Emre' => Set(1) { 'Oguz' },
    'Mustafa' => Set(0) {},
    'Oguz' => Set(3) { 'Omer', 'Zeki', 'Emre' }
  }
}
*/