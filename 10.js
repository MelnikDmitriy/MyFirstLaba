/* В функцию передается несколько массивов. Из первого массива, переданного в функцию, 
вывести элементы, которые имеются во всех других массивах, переданных в функцию.

Input: ([3, 6, 1, 8, 3, 6, 3, 6, 3, 6], [1, 4, 2, 4], [6, 3, 2, 8, 1])

Output: [1] */
const filter = (one, two, three) => {

    let mas = [];

    for (let i = 0; i < one.length; i++) {
        if ((two.includes(one[i]))  && (three.includes(one[i]))) {
            mas.push(one[i])
        }
    }

    return mas
};

const mas = [2, 6, 1, 8, 3, 6, 3, 6, 3, 6];
const masTwo = [1, 4, 2, 4];
const masThree = [6, 3, 2, 8, 1];

console.log(filter(mas, masTwo, masThree))