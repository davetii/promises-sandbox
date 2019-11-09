const sq = require('./sqroot');

const sqRoot = () => {
    sq.sq(2)
        .then( v => { console.log(v);
        });
};

module.exports = {
    sqRoot:sqRoot
};



