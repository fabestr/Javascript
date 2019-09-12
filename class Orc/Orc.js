'use strict';

class Orc extends Creature
{
    constructor(name,age, strenght)
    {
        super(name,age,strenght);   
    }

    scream(words)
    {
        return super.saySomething(words).toUpperCase();
    }

    bite(someone)
    {
        console.log(`${this.name} a mordu ${someone.name}`);
    }
}

let manu = new Orc('manu', 28, 20);
let flo = new Orc('flo', 34,10);
console.log(manu.scream("j'arrete les soirées"));
flo.bite(manu);
console.log(flo.scream("t'es qu'une merde"));