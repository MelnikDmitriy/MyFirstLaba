
const filter = (str, znach) => {
    if (znach === 'ASK') {
        return (str.sort((a, b) => a - b));
    } else if (znach === 'DESC') {
        return (str.sort((a, b) => b - a));
    } else return str
};

const mas = [4, 5, 2, 4, 1, 5, 3,];
const value = 'NOT SORT';

zik = filter(mas, value)

console.log(zik)