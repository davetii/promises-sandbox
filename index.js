const simple = require('./simple-promise');
const chain = require('./promise-chaining');
//const fetch = require('./promise-fetch');
const fetch2 = require('./async-await-fetch');
const all = require('./promise-all');
const race = require('./promise-race');

simple.sqRoot(2);
chain.sqRoot(2);
//fetch.fetch();
fetch2.getDaveTurner();
let dogImage  = fetch2.getRandomDogImage();
console.log("dogImage: " + dogImage);
all.successCall();
all.shortCircuitFail();
all.handledReject();
race.testRace();
race.testRaceWithError();
