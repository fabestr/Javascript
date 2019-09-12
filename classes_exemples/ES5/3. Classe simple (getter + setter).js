/*************************************
 * Déclaration
 *************************************/

function Character(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.status = 'IDLE';
}

// GETTER and SETTER properties !
Object.defineProperty(Character.prototype, 'fullname', {
    get : function() {
        return `${this.firstname} ${this.lastname.toUpperCase()}`;
    },
    set : function(value) {
        let = fullname = value.split(' ');
        this.firstname = fullname[0];
        this.lastname = fullname[1];
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

bilbo.fullname; // "Bilbo BAGGINS"

bilbo.fullname = 'Bilbon Sacquet'; // Réassignation de la propriété dynamique "fullname"
bilbo.firstname; // "Bilbon"
bilbo.lastname; // "Sacquet"
