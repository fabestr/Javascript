/*************************************
 * Déclaration
 *************************************/

function Character(firstname, lastname) {
    if (!(this instanceof Character)) {
        throw new Error('Cette fonction est un constructeur et doit être appelée avec le mot-clé "new" !');
    }

    this.firstname = firstname;
    this.lastname = lastname;

    this.status = 'IDLE';
}

Character.prototype.walk = function() {
    this.status = 'WALKING';
    console.log(`${this.firstname} ${this.lastname.toUpperCase()} is now walking...`);
};
    
Character.prototype.stop = function() {
    this.status = 'IDLE';
    console.log(`${this.firstname} ${this.lastname.toUpperCase()} has stopped!`);
};

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