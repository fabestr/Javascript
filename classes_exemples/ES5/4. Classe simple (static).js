/*************************************
 * Déclaration
 *************************************/

function Character(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.status = Character.DEFAULT_STATUS; // Utilisation d'une PROPRIÉTÉ statique de "Character" (définie plus bas)
}

// Définition d'une PROPRIÉTÉ statique (appartenant à la classe elle-même et non aux instances)
Character.DEFAULT_STATUS = 'IDLE';
// Définition d'une MÉTHODE statique (appartenant à la classe elle-même et non aux instances)
Character.getCharacterStatus = function(character) {
    if (!(character instanceof Character)) {
        throw new Error('The given character is not an instance of class Character');
    }
    return character.status;
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
bilbo.walk();

// Utilisation de la MÉTHODE statique :
Character.getCharacterStatus(bilbo); // "WALKING"
Character.getCharacterStatus("boo-ya!!!"); // Uncaught Error: The given character is not an instance of class Character
