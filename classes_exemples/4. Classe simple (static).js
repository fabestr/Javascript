/*************************************
 * Déclaration
 *************************************/

class Character {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;

        this.status = Character.DEFAULT_STATUS; // Utilisation d'une PROPRIÉTÉ statique de "Character" (définie plus bas)
    }

    // Définition d'une MÉTHODE statique (appartenant à la classe elle-même et non aux instances)
    static getCharacterStatus(character) {
        if (!(character instanceof Character)) {
            throw new Error('The given character is not an instance of class Character');
        }
        return character.status;
    }

    get fullname() {
        return `${this.firstname} ${this.lastname.toUpperCase()}`;
    }

    set fullname(value) {
        [this.firstname, this.lastname] = value.split(' ');
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

// Définition d'une PROPRIÉTÉ statique (appartenant à la classe elle-même et non aux instances)
Character.DEFAULT_STATUS = 'IDLE';

/*************************************
 * Invocation
 *************************************/

let bilbo = new Character('Bilbo', 'Baggins');
bilbo.walk();

// Utilisation de la MÉTHODE statique :
Character.getCharacterStatus(bilbo); // "WALKING"
Character.getCharacterStatus("boo-ya!!!"); // Uncaught Error: The given character is not an instance of class Character
