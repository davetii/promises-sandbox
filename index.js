const simple = require('./simple-promise');
const chain = require('./promise-chaining');
const fetch = require('./promise-fetch');
const all = require('./promise-all');
const race = require('./promise-race');

simple.sqRoot(2);
chain.sqRoot(2);
fetch.fetch();
all.successCall();
all.shortCircuitFail();
all.handledReject();
race.testRace();
race.testRaceWithError();
