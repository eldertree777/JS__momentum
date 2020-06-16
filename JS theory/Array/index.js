const mon = "MON";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
// 
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", true];
console.log(daysOfWeek);
console.log(daysOfWeek[2]);

// object
const jewon = {
    name : "jewon",
    age : 24,
    gender : "man",
    marry : false,
    favMovies: ["A","B","C"],
    favFood : [
        {name:"AA", hot: true},
        {name:"BB", hot: false}
    ]
};

console.log(jewon.name);
jewon.name = "helloworld";
console.log(jewon.name);

console.log(jewon);