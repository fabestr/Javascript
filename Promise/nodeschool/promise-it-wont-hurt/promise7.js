'use strict';

var firstPromise = first()
    .then(second)
    .then(finalData => onFulfilled(finalData));

function onFulfilled(value)
{
    console.log(value);
}



//correction possible

/* var firstPromise = first();
    
    var secondPromise = firstPromise.then(function (val) {
      return second(val);
    });
    
    secondPromise.then(console.log); */


    // Une autre possibilité aurait été :
    // first().then(second).then(console.log);