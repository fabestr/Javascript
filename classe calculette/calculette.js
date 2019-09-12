'use strict';

class Calculette 
{
    constructor(nombre1, nombre2)
    {
            this.nombre1 = nombre1;
            this.nombre2 = nombre2;
    }

    get nb1()
    {
        return this.nombre1;
    }
    set nb1(value)
    {
        if(isNaN(value))
        {
            throw new Error('Ce nest pas un nombre!! ');
            
        }else{
            this.nombre1 = value;
        }
    }

    get nb2()
    {
        return this.nombre2;
    }
    set nb2(value)
    {
        if(isNaN(value))
        {
            throw new Error('Ce nest pas un nombre!! ');
           
        }else{
            this.nombre2 = value;
        }
    }



    additionner()
    {
        return this.nombre1 + this.nombre2
    }

    soustraire()
    {
        return this.nombre1 - this.nombre2
    }

    multiplier()
    {
        return this.nombre1 * this.nombre2
    }

    diviser()
    {
        return this.nombre1 / this.nombre2
    }

    modulo()
    {
        return this.nombre1 % this.nombre2
    }
}




let calc =new Calculette(5,3);
console.log(calc.additionner());
console.log(calc.soustraire());
console.log(calc.multiplier());
console.log(calc.diviser());
console.log(calc.modulo());

calc.nb1 = 52;
console.log(calc.additionner());
calc.nb2 = 'je suis une erreur';