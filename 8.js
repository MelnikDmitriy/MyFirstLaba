
let obj = {};

const recurc = (mas) => {
    if (mas.length == 1) {
        return {child: {path: mas[0]}};
    }

    return {
        path : mas.splice(0, 1), 
        child: recurc(mas)
    };
    
}


const filter = (a) => {
    let str = a.split('/');
    obj.protocol = str[0].slice(0, 5);
    obj.hostame = str[2];
    str.splice(0, 3);

    const objLast = recurc(str);
    obj.child = objLast;

    return obj;
    
};


console.log(filter('https://www.google.com/doodles/rubiks-cube/no/podorunok'));
