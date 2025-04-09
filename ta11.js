function duplicate(array) {
    const occurrences = new Map();
    for (let element of array) {
        occurrences.set(element,(occurrences.get(element) || 0 ) + 1);
    }
    let repeatedCount = 0;
    for (let count of occurrences.values()) {
        if (count > 1) {
            repeatedCount++;
        }
    }
    console.log(repeatedCount);

}
const array = [1, 2, 3, 3, 4, 5, 4, 23, 3, 5, 4, 5, 5, 3, 21, 23]