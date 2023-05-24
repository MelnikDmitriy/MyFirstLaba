/* Написать функцию, которая принимает на вход URL, например https://www.google.com/doodles/rubiks-cube, и возвращает объект вида:
{
protocol: “http”,
hostname: “www.google.com”,
child: {
path: “doodles”
child: {
rubiks-cube
}
}
}
URL может быть любой длины, но формат всегда будет {protocol}://{hostname}/path/path/…/path */
let obj = {};

const recurc = (mas) => {
    if (mas.length == 1) {
        return {child: {path: mas[0]}};
    }

    return {
        path : mas.shift(), 
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
