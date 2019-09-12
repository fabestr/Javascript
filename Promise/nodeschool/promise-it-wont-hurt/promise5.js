'use strict';

var promise = new Promise(function (fulfill, reject) {
    fulfill('VALEUR DE LA PROMESSE')
  });

  promise.then(fulfill => console.log(fulfill));


console.log('PROGRAMME PRINCIPAL')