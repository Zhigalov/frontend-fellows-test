var translitMap = require('translit-russian')
var translit = require('translit')(translitMap);
var translate = require('./translate')

function slugGenerator(str) {
    return str
        .toLowerCase()
        .replace(/[^a-zа-яё0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

module.exports.translit = function (str) {
    if (typeof str !== 'string') {
        return;
    }

    return translit(slugGenerator(str));
};

module.exports.translate = function (str) {
    if (typeof str !== 'string') {
        return;
    }

    return translate(slugGenerator(str));
};
