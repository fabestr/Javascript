'use strict';

var promise = new Promise(function (fulfill, reject) {

    setTimeout(() => fulfill('ACCOMPLIE !'), 300);
  });
  
    promise.then(response => console.log(response));

