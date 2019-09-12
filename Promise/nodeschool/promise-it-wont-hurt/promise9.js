'use strict';

var json = process.argv[2];

function parsePromised(arg)
{
    var promise = new Promise(function(fulfill, reject)
    {
        try{
            return fulfill(JSON.parse(arg))
        } catch(e){
            return reject(e.message)
        }
    });

    return promise;
}

parsePromised(json).then(null,console.log);