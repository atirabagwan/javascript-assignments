// Write a function which will accept original array and array of values that needs to be excluded and return 
// a new array by excluding unwanted values from original array.
//        Eg. function exclude(arr, values) {};
//        exclude([1, 2, 3, 4], [1, 4]) => [2, 3]

//methode 1 :
// function excludeVlues(a, b){
//     var c;
//     for (var i=0; i<a.length; i++)
//     {
//         if(!b.includes(a[i]))
//             c.push(a[i]);
//     }
//     return c
// }

//method 2 :

function excludeVlues(a,b){
    return a.filter(element => !b.includes(element))
}

console.log(excludeVlues([1,2,3,4,5], [3,4]));

