var postController = require('../src/post');
var url = 'mongodb://localhost:27017/test';
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

describe('Connection', function () {
    var connect;
    var postCollection;

    before(function (done) {
        MongoClient
            .connect(url)
            .then(function (db) {
                connect = db;
                postCollection = db.collection('posts');
            })
            .then(done, done);
    });

    beforeEach(function (done) {
        postCollection.remove({}, done);
    });

    it('should insert post to mongo', function (done) {
        postController('Привет мой друг')
            .then(function () {
                return postCollection.find({}).toArray();
            })
            .then(function (actual) {
                assert(actual.length, 1);
            })
            .then(done, done);
    });

    after(function () {
        connect.close();
    })
});
