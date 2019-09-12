/*************************************
 * Déclaration
 *************************************/

function Character(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.status = 'IDLE';
}

// GETTER property !
Object.defineProperty(Character.prototype, 'fullname', {
    get : function() {
        return `${this.firstname} ${this.lastname.toUpperCase()}`;
    }
});

Character.prototype.walk = function() {
    this.status = 'WALKING';
    console.log(`${this.fullname} is now walking...`);
};

Character.prototype.stop = function() {
    this.status = 'IDLE';
    console.log(`${this.fullname} has stopped!`);
};

/*************************************
 * Invocation
 *************************************/

let bilbo = new Character('Bilbo', 'Baggins');
let frodo = new Character('Frodo', 'Baggins');

bilbo.fullname; // "Bilbo BAGGINS"
frodo.fullname; // "Frodo BAGGINS"
