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

    // SETTER property !
    set fullname(value) {
        [this.firstname, this.lastname] = value.split(' '); // La 'value' représente la nouvelle valeur de la propriété 'fullname'
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

bilbo.fullname; // "Bilbo BAGGINS"

bilbo.fullname = 'Bilbon Sacquet'; // Réassignation de la propriété dynamique "fullname"
bilbo.firstname; // "Bilbon"
bilbo.lastname; // "Sacquet"
