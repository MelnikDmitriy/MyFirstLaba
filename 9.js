/* Даны две строки. Написать функцию сравнения этих строк. 
Вывести символы большей строки, на количество которых отличается.

Input: ("text education part 2", "text education")

Output: " part 2" */

const compare = (one, two) => {
    let minimum = null;
    let str = [];

    if (one.length > two.length) {
        minimum = two.length;
        str = one
    } else {
        minimum = one.length;
        str = two
    }

    str.splice(0, minimum);

    return str.join(' ')

};

const str = "text education part 2";
const strTwo = "text education";

console.log(compare(str.split(' '), strTwo.split(' ')))