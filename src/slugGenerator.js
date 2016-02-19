function slugGenerator(str) {
    if (typeof str !== 'string') {
        return;
    }

    return str
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, '')
        .trim()
        .replace(/\s+/g, '-');
}

module.exports = slugGenerator;
