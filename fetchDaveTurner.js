const fetch = require('node-fetch');

module.exports.fetchDaveTurnerInfo = () => {
    return new Promise(function(resolve, reject) {
        fetch("http://www.daveturner.info").then( res => {resolve(res.text())});
    });
};