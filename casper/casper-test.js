casper.test.begin('Search #DumpConf in twitter', function (test) {
    casper
        .start('https://twitter.com/')
        .thenClick('.ItemSearch')
        .then(function () {
            this.fill('form#global-nav-search', {
                q: '#DumpConf'
            }, true);
        })
        .then(function () {
            test.assertUrlMatch(/\/search/, 'should redirect to search page');
        })
        .then(function () {
            this.capture('twitter.png');
        })
        .run(function () {
            test.done();
        });
});
