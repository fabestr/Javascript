'use strict';

class Creature
{
    constructor(name,age, strenght)
    {
        this.name = name;
        this.age = age;
        this.strenght = strenght;
    }

    saySomething(words)
    {
        return words;
    }

    identity()
    {
        console.log(`je m'appelle ${this.name}`, `jai ${this.age} ans`, `et ma force est de ${this.strenght}`);
    }
}

let crea = new Creature('Flo', 34, 10);
console.log(crea.saySomething('je mange des amandes pour prendre en masse!'));
crea.identity();