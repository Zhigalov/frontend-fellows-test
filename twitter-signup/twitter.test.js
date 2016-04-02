describe('Twitter signup', function () {
    beforeEach(function () {
        $('#full-name').val('').trigger('input');
    });

    function inputText(text) {
        // $('#full-name').val(text).trigger('input');

        $('#full-name').focus();
        document.execCommand('insertText', false, text);
    }

    it('should no error when input is empty', function () {
        $('.notwitter').is(':visible').should.be.false;
    });

    it('should no error when input `teremok`', function () {
        inputText('teremok');

        $('.notwitter').is(':visible').should.be.false;
    });

    it('should show error when input `twitterok`', function () {
        inputText('twitterok');

        $('.notwitter').is(':visible').should.be.true;
    });
});
