module.exports.sq = (number) => {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if(typeof number !== 'number') {
                return reject(new Error('Argument is not a number'));
            }
            resolve(number * number);
        }, 1000);
    });
};