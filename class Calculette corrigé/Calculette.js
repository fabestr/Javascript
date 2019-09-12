/*************************************
 * Déclaration
 *************************************/

class Calculette {
    constructor(nb1, nb2) {
        this.nombre1 = nb1;
        this.nombre2 = nb2;
    }

    additionner() {
        return this.nombre1 + this.nombre2;
    }

    multiplier() {
        return this.nombre1 * this.nombre2;
    }

    diviser() {
        if(this.nombre2 == 0) {
            throw new Error('La division par zéro est interdite');
        }

        return this.nombre1 / this.nombre2;
    }

    soustraire() {
        return this.nombre1 - this.nombre2;
    }

    modulo() {
        if(this.nombre2 == 0) {
            throw new Error('La division par zéro est interdite');
        }

        return this.nombre1 % this.nombre2;
    }
}

/*************************************
 * Invocation
 *************************************/

let myCalc = new Calculette(5, 8);

myCalc.additionner(); // 13
myCalc.multiplier(); // 40
myCalc.diviser(); // 0.625
myCalc.soustraire(); // -3
myCalc.modulo(); // 5

myCalc.nombre1 = 4;
myCalc.nombre2 = 3;

myCalc.additionner(); // 7
myCalc.multiplier(); // 12
