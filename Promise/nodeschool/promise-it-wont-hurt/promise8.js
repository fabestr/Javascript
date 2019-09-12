'use strict';

function attachTitle(arg)
{
   return `DR. ${arg}`;
}

var promise = Promise.resolve('MANHATTAN');
var chainPromise = promise.then(attachTitle).then(console.log);