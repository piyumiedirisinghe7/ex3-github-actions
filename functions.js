function add(a, b) {
    return a - b;
}

function greeting(hour) {
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
}

module.exports = { add, greeting };
