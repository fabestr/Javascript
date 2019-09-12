'use strict';

function alwaysThrows()
{
    throw new Error('OH NOES');
}

function iterate(nb)
{
    console.log(nb +1);
    return nb +1
}

var promise = Promise.resolve(iterate(0))
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(alwaysThrows)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    .then(iterate)
                    // .catch(console.log)
                    .catch((e) => console.log(e.message))
