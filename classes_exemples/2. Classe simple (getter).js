/*************************************
 * Déclaration
 *************************************/

class Character {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;

        this.status = 'IDLE';
    }

    // GETTER property !
    get fullname() {
        return `${this.firstname} ${this.lastname.toUpperCase()}`;
    }

    walk() {
        this.status = 'WALKING';
        console.log(`${this.fullname} is now walking...`);
    }
    
    stop() {
        this.status = 'IDLE';
        console.log(`${this.fullname} has stopped!`);
    }
}

/*************************************
 * Invocation
 *************************************/

let bilbo = new Character('Bilbo', 'Baggins');
let frodo = new Character('Frodo', 'Baggins');

bilbo.fullname; // "Bilbo BAGGINS"
frodo.fullname; // "Frodo BAGGINS"
