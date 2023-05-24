
const filter = (element, first, last) => {
    return element.slice(first, last + 1);
};

const mas = [13, 14, 32, 23, 34, 21, 44, 47, 86];

const start = 4;

const end = 6;

kizo = filter(mas, start, end)

console.log(kizo)