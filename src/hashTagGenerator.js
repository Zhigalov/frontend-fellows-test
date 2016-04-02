module.exports = hashTagGenerator;

function hashTagGenerator(words) {
    return '#' + words
            .split(/[^\wа-яё]/i)
            .map(normalizeWord)
            .join('');
}

function normalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.toLowerCase().slice(1);
}
