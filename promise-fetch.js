const fetch = require('node-fetch');

const dt = () => {
    return new Promise(function(resolve, reject) {
        fetch("http://www.daveturner.info").then( res => {resolve(res.text())});
    });
};

fetchDaveTurner = () => {
  dt().then(
      v => {console.log(v)},
      e => {console.log('err' + e)}
  );
};

module.exports = {
    fetch:fetchDaveTurner
};