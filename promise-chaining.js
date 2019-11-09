const sq = require('./sqroot');

const sqRoot = () => {

    sq.sq(2)
        .then(
            v => { console.log('step 1 ' + v); return sq.sq(v);
         })
        .then(
            v => { console.log('step 1 ' + v); return sq.sq(v);
        })
        .then(
            v => { console.log('step 3 ' + v); return sq.sq(v);
        })
        .then(
            v => { console.log('step 4 ' + v); return sq.sq(v);
        })
        .then(v => { console.log('step 5 ' + v);
        });

};

module.exports = {
    sqRoot: sqRoot
};