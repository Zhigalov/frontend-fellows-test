var generateNoteId = require('./generateNoteId');
var url = 'mongodb://localhost:27017/test';
var MongoClient = require('mongodb').MongoClient;

/**
 * Добавляет запись в базу
 */
module.exports = function (title) {
    var slug = generateNoteId(title);
    var connect;

    return MongoClient
        .connect(url)
        .then(function (db) {
            connect = db;
            console.log("Connected correctly to server.");

            var post = {
                title: title,
                slug: slug
            };
            return db.collection('posts').insert(post);
        })
        .then(function () {
            connect.close();
        });
};
