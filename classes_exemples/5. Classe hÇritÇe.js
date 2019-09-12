/*************************************
 * Classe "Character"
 *************************************/

class Character {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;

        this.status = 'IDLE';
    }

    walk() {
        this.status = 'WALKING';
        console.log(`${this.firstname} is now walking...`);
    }
    
    stop() {
        this.status = 'IDLE';
        console.log(`${this.firstname} has stopped!`);
    }
}

/*************************************
 * Classe "Hobbit" (qui étend "Character")
 *************************************/

class Hobbit extends Character {
    constructor(firstname, lastname) {
        super(firstname, lastname); // Invoque le constructeur de la classe parente (ici "Character") afin de lui passer les propriétés "firstname" et "lastname"
    }

    eat(food) {
        console.log(`${this.firstname} is eating ${food}.`);
    }
}

/*************************************
 * Classe "Magicien" (qui étend "Character")
 *************************************/

class Magician extends Character {
    constructor(firstname, lastname, wand) {
        super(firstname, lastname); // Invoque le constructeur de la classe parente (ici "Character") afin de lui passer les propriétés "firstname" et "lastname"
        this.wand = wand; // On complète l'objet avec la propriété supplémentaire inhérente aux magiciens : "wand"  (bâton)
    }

    throwSpell(spellName) {
        console.log(`${this.firstname} is throwing a spell: “${spellName}”`);
    }

    stop() {
        super.stop(); // Appel de la MÉTHODE parente "stop()"
        console.log(' “YOU SHALL NO PASS!!!” ');
    }
}

/*************************************
 * Invocation
 *************************************/

let gollum = new Character('Gollum', 'Gollum');
let bilbo = new Hobbit('Bilbo', 'Baggins');
let gandalf = new Magician('Gandalf', 'The Grey', 'wood');
let saruman = new Magician('Saruman', 'The White', 'iron');

gollum.walk(); // "Gollum is now walking..."

bilbo.walk(); // "Bilbo is now walking..."
bilbo.eat('mushrooms'); // "Bilbo is eating mushrooms."

gandalf.wand; // "wood"
gandalf.walk(); // "Gandalf is now walking..."
gandalf.stop(); // "Gandalf has stopped!"
                //  “YOU SHALL NO PASS!!!” 

saruman.wand; // "iron"
saruman.throwSpell('!ASH-NAGH!'); // "Saruman is throwing a spell: “!ASH-NAGH!”"



gollum.eat('fishhh'); // Uncaught TypeError: gollum.eat is not a function
