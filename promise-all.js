const sq = require('./sqroot');

const hello = () => {
    return new Promise(function(resolve, reject) {
        resolve('hello');
    });
};

const hello2 = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Hello Again');
        }, 2000);

    });
};

const helloFailed = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            reject('Hello Failed');
        }, 2000);

    });
};

const successCall = () => {
    Promise.all([
        sq.sq(2),
        hello2(),
        hello()])
        .then(ar => {console.log("showing all success: " + ar)})
        .catch(e => {console.log(e)})
};

const shortCircuitFail = () => {
    Promise.all([
        sq.sq(2),
        helloFailed(),
        hello()])
        .then(ar => {console.log("showing all success from shortCircuitFail: " + ar)})
        .catch(e => {console.log("in shortCircuitFail catch: " + e)})
};

const handledReject = () => {
    Promise.all([
        sq.sq(2).catch(e => { return 'error'}),
        helloFailed().catch(e => { return 'error'}),
        hello().catch(e => { return 'error'})])
        .then(ar => {console.log("handledReject success callback: " + ar.filter((s => s !== 'error')))})
};



module.exports = {
    successCall:successCall,
    shortCircuitFail: shortCircuitFail,
    handledReject: handledReject
};