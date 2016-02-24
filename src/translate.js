var got = require('got');
var API_KEY = '<your_api_key>';
var URI = 'https://translate.yandex.net/api/v1.5/tr.json/translate'

function translate(text, lang) {
    var query = {
        key: API_KEY,
        text: text,
        lang: lang || 'en'
    }

    return got(URI, { query: query, json: true })
        .then(function (res) {
            return res.body.text.pop();
        });
}

module.exports = translate;
