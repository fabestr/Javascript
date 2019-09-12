/*************************************
 * Fonction "Character"
 *************************************/

function Character(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;

    this.status = 'IDLE';
}

Character.prototype.walk = function() {
    this.status = 'WALKING';
    console.log(`${this.firstname} is now walking...`);
};

Character.prototype.stop = function() {
    this.status = 'IDLE';
    console.log(`${this.firstname} has stopped!`);
};

/*************************************
 * Fonction "Hobbit" (qui étends "Character")
 *************************************/

function Hobbit(firstname, lastname) {
    Character.call(this, firstname, lastname); // Invoque le constructeur de la classe parente (ici "Character") afin de lui passer les propriétés "firstname" et "lastname"
}

// Copie du prototype de la "classe" parente dans le prototype de cette "classe"
Hobbit.prototype = Object.create(Character.prototype);
Hobbit.prototype.constructor = Hobbit;

Hobbit.prototype.eat = function(food) {
    console.log(`${this.firstname} is eating ${food}.`);
};

/*************************************
 * Fonction "Magicien" (qui étend "Character")
 *************************************/

function Magician(firstname, lastname, wand) {
    Character.call(this, firstname, lastname); // Invoque le constructeur de la classe parente (ici "Character") afin de lui passer les propriétés "firstname" et "lastname"
    this.wand = wand; // On complète l'objet avec la propriété supplémentaire inhérente aux magiciens : "wand"  (bâton)
}

// Copie du prototype de la "classe" parente dans le prototype de cette "classe"
Magician.prototype = Object.create(Character.prototype);
Magician.prototype.constructor = Magician;

Magician.prototype.throwSpell = function(spellName) {
    console.log(`${this.firstname} is throwing a spell: “${spellName}”`);
};

Magician.prototype.stop = function() {
    Character.prototype.stop.call(this); // Appel de la MÉTHODE parente "stop()" avec le contexte de cet objet
    console.log(' “YOU SHALL NO PASS!!!” ');
};

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
