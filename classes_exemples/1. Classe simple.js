/*************************************
 * Déclaration
 *************************************/

class Character {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;

        this.status = 'IDLE';
    }

    walk() {
        this.status = 'WALKING';
        console.log(`${this.firstname} ${this.lastname.toUpperCase()} is now walking...`);
    }
    
    stop() {
        this.status = 'IDLE';
        console.log(`${this.firstname} ${this.lastname.toUpperCase()} has stopped!`);
    }
}

/*************************************
 * Invocation
 *************************************/

let bilbo = new Character('Bilbo', 'Baggins');
let frodo = new Character('Frodo', 'Baggins');

bilbo.walk(); // <-- "Bilbo BAGGINS is now walking ..."
bilbo.status; // <-- "WALKING"
bilbo.stop(); // <-- "Bilbo BAGGINS has stopped!"
bilbo.status; // <-- "IDLE"

frodo.status; // <-- "IDLE"
frodo.walk(); // <-- "Frodo BAGGINS is now walking ..."
frodo.status; // <-- "WALKING"