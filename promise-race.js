const askSam = () => {
    return new Promise(((resolve, reject) => {
      setTimeout(() =>
          resolve('Sam says yes I can come over'), 4000);
    }));
};


const askChels = () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() =>
            reject('Chels says I am busy tonight'), 5000);
    }));
};

const askLex = () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() =>
            resolve('Lex says Im on my way'), 2000);
    }));
};

const askError = () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() =>
            reject('Hell No!'), 8000);
    }));
};

const testRace = () => {
    Promise.race([askSam(), askChels(), askLex()]).then(v => {
        console.log(v);
    });
};

const testRaceWithError = () => {
    Promise.race([askSam(), askError(), askChels(), askLex()]).then(v => {
        console.log(v);
    });
};

module.exports = {
    testRace:testRace,
    testRaceWithError: testRaceWithError
};



