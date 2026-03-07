function checkvote(age) {
    
    if (typeof age !== "number") return false;
    if (!Number.isFinite(age)) return false;
    if (!Number.isInteger(age)) return false;
    if (age < 0 || age > 120) return false;
    return age >= 18;
}

module.exports= checkvote;