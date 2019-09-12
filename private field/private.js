class Character {
    
    #status = 'IDLE';
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        
    }
    
    get #status() {return this.#status; }
}

const bilbo = new Character('Bilbo', 'Baggins');
bilbo.status; // Affiche "idle"

// =====================
// Votre mission si vous l'acceptez : modifiez la classe pour rendre le champs "status" en private
