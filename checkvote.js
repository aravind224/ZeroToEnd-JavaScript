function checkvote(age) {
    if (typeof age !== "number") {
        return false;
    }

    if (age >= 18) {
        return true;
    }

    return false;
}

module.exports= checkvote;