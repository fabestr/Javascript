'use strict';

var promise = new Promise(function (fulfill, reject) {
    setTimeout(() => reject(new Error('REJET !')), 300);
  });
  
  function onReject (error) {
    console.log(error.message) ;
  }
  
  promise.then(response => console.log(response), error => onReject(error))