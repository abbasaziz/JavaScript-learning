const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];




//forEach
// 1- with for loop
// for(let i=0; i<companies.length;i++){
//     console.log(companies[i]);
// }

// 2- with forEach loop
// companies.forEach(function(company){
//     console.log(company.name);
// });

//filter
// 1- with for loop
// let canDrink = [];
// for (let i = 0; i<ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink)

//  2- with filter
// const canDrink = ages.filter(function(age){
//     if(age >=21){
//         return true
//     }
// })
// console.log(canDrink);


// 3- same with arrow function

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// 4- filter retail companies out from the class
// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

// console.log(retailCompanies)

// 5- filter retail with arrow functions
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);

// 6- filter 80s companies
// const eighties = companies.filter(function(company){
//     if(company.start >= 1980 && company.start < 1990){
//         return true
//     }
// });
// console.log(eighties)

// 7- filter 80s with arrow
// const eighties = companies.filter(company => company.start >=1980 && company.start < 1990)
// console.log(eighties)


// 8- companies that lasted 10 or more years
// const olderthan10 = companies.filter(company => (company.end - company.start) >= 10);
// console.log(olderthan10);

//map
// 1- create array of company names
// const companyNames= companies.map(function(company){
//     return company.name;
// });
// console.log(companyNames)

// 2- create company names along with start to end dates
// const TestMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(TestMap)

// 3- create the same with arrows

// const TestMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(TestMap)

// 4- square the ages with map
// const agesSquare = ages.map(age => Math.sqrt(age));
// const ageX2 = ages.map (age => age*2 );
// console.log(ageX2;)


// 5-both in the same line
// const agesSquare = ages
// .map(age => Math.sqrt(age))
// .map (age => age*2);

// console.log(agesSquare);





//sort
// 1- sort by start years
// const sortedComp = companies.sort(function(c1, c2){
//     if(c1.start>c2.start){
//         return 1;
//     } else {
//         return -1; 
//     }
// });

// console.log(sortedComp);

// 2- sort using arrows and iternary operator '?'
// const sortedComp = companies.sort((a,b)=> (a.start > b.start ? 1 : -1));
// console.log(sortedComp);

// 3- sort ages
// const sortAges = ages.sort((a, b) => a-b);  // ascending
// const sortAges = ages.sort((a, b) => b-a);  // descending 
// console.log(sortAges);

//reduce

// 1- add all ages together using for
// let ageSum = 0;
// for(let i=0; i< ages.length;i++){
//     ageSum += ages[i];
// }
// console.log(ageSum);


// 2- add ages using reduce
// const ageSum = ages.reduce(function(total,age){
//     return total + age;
// }, 0);
// console.log(ageSum);

// 3- add ages with reduce and arrow func
// const ageSum = ages.reduce((total, age) => total+age,0);
// console.log(ageSum);

// 4- total years for all companies or their range
// const rangeComp = companies.reduce((total, company) => total+(company.end-company.start),0);
// console.log(rangeComp)

// FINAL: example using all methods

const combined = ages
.map(age => age*2)
.filter(age => age >= 40)
.sort((a,b) => a-b)
.reduce((a,b) => a+b, 0);



console.log(combined);