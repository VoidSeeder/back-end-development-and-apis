function isPrime(number) {
    if(number <= 1) {
        return false;
    }

    let interator = number - 1;

    while(interator > 1) {
        if(number % interator === 0) {
            return false;
        }

        interator--;
    }

    return true;
}

module.exports = {
    isPrime,
};
