function findTheOldest(array) {
    let oldestPerson = 0;
    let mostOld = "";
    for (let person of array) {
        if ((person.yearOfDeath - person.yearOfBirth) > oldestPerson) {
            oldestPerson = person.name;
        }
    }
    return (oldestPerson);
}

const people =
    [
        { name: "PerriElOrnitorrinco", yearOfBirth: 1900, yearOfDeath: 2025 },
        { name: "Phineas", yearOfBirth: 1932, yearOfDeath: 1975 },
        { name: "Ferb", yearOfBirth: 1926, yearOfDeath: 1950 },
        { name: "Batman", yearOfBirth: 1926, yearOfDeath: 1994 },
        { name: "Spider-man", yearOfBirth: 1926, yearOfDeath: 2003 }
    ];
