const fetch = require('./fetchDaveTurner');

fetchDaveTurner = () => {
    fetch.fetchDaveTurnerInfo().then(
      v => {console.log(v)},
      e => {console.log('err' + e)}
  );
};

module.exports = {
    fetch:fetchDaveTurner
};