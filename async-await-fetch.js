const fetch = require('node-fetch');
const fetchDt = require('./fetchDaveTurner');

async function getDaveTurner() {
    const content = await fetchDt.fetchDaveTurnerInfo();
    console.log(content);
}

async function getRandomDogImage() {
    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let v = await response.json();
    console.log(v.message);
    return v.message;
}

module.exports = {
    getDaveTurner:getDaveTurner,
    getRandomDogImage: getRandomDogImage
};