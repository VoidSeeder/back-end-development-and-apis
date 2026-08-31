function getUpperCase(str) {
    return str.toUpperCase();
}

function getLowerCase(str) {
    return str.toLowerCase();
}

function getSentenceCase(str) {
    const chars = getLowerCase(str).split("");

    chars[0] = chars[0].toUpperCase();

    return chars.join("");
}

function getProperCase(str) {
    const words = str.split(" ").map(getSentenceCase);

    return words.join(" ");
}

module.exports = {
    getUpperCase,
    getLowerCase,
    getSentenceCase,
    getProperCase,
}