const chronometre = {
    compteur : 0,
    demarrer : function() {
        setInterval(() => {
            this.compteur++;
            console.log(this.compteur);
        }, 1000);
    }
};

chronometre.demarrer();
