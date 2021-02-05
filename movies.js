// Consider movies = [ { title: "xxx", year: 2020, rating: 8 } ]
//  filter movies which has a rating more than 7 and display the title of 
//  those movies in desc order of release year.

movies = [ { title: "movie1", year: 2019, rating: 6 }, 
{ title: "movie2", year: 2021, rating: 8 }, 
{ title: "movie3", year: 2017, rating: 9 },
{ title: "movie4", year: 2000, rating: 9 },
{ title: "movie5", year: 2015, rating: 9 } ];

console.log(movies.filter(i => i.rating > 7).sort((a, b)=> b.year - a.year).map(a=> a.title));
