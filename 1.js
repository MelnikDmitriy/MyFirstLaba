/* Даны две строки. Написать функцию сравнения этих строк. 
Вывести символы большей строки, на количество которых отличается.

Input: ("text education part 2", "text education")

Output: " part 2" */

const compare = (one, two) => {
    let maximum = null;
    let minimum = null;
    let str = [];

    if (one.length > two.length) {
        maximum = one;
        minimum = two;
    } else {
        maximum = two;
        minimum = one;
    }

    for (let i = 0; i < maximum.length; i++) {
        if (maximum[i] != minimum[i]) {
            str.push(maximum[i]);
        }
    }

    return str.join('')


};

const str = "text education part 2";
const strTwo = "text education";

console.log(compare(str, strTwo))