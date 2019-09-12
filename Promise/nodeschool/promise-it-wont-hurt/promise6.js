'use strict';





var promise = Promise.reject(new Error('error'));
promise.catch(err => console.log(err.message));


