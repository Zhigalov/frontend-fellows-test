function generateNoteId(str) {
    if (typeof str !== 'string') {
        return;
    }

    return str
        .split('\n').shift()
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

module.exports = generateNoteId;
