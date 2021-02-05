// Write a function which will accept original array and array of values that needs to be excluded and return 
// a new array by excluding unwanted values from original array.
//        Eg. function exclude(arr, values) {};
//        exclude([1, 2, 3, 4], [1, 4]) => [2, 3]

//methode 1 :
function removeElement(a, b){
    var c;
    for (var i=0; i<a.length; i++)
    {
        if(!b.includes(a[i]))
            c.push(a[i]);
    }
    return c
}

//method 2 :

c = a.filter(element => !b.includes(element))


// Consider movies = [ { title: "xxx", year: 2020, rating: 8 } ]
//  filter movies which has a rating more than 7 and display the title of 
//  those movies in desc order of release year.

movies = [ { title: "movie1", year: 2019, rating: 6 }, { title: "movie2", year: 2021, rating: 8 }, 
{ title: "movie3", year: 2020, rating: 9 } ];

function selectMovie(rating){
    if(rating > 7)
        return true;
    return false;
}
list = {}
for(var i=0; i<movies.length; i++){
    if( movies[i]["rating"] > 7)
        list[movies[i]["year"]] =movies[i]["title"] ;
}

for (key in list)
    console.log(list[key])


// Consider array of primitive type and count the number of occurrences of an element
// Eg: function(arr, search) {}

function countOcurrences(arr, search){
    var cnt = 0;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == search)
            cnt += 1;
    }
    return cnt;
}

a.filt

arr = [1,2,2,2,3,4,5]
console.log(countOcurrences(arr, 2))
