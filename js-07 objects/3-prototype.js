// ES 5 prototype 

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

}

//get summary prototype
Book.prototype.getSummary = function() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
};


//get age prototype
Book.prototype.getAge = function() {
    let years = (new Date().getFullYear()) -(this.year);
    return `${this.title} is around ${years} years old`;
};

//revise/change the year prototype

Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised=true;
}


//instantiate book
const book1= new Book('Book One', 'John Snow', '2015');
const book2= new Book('Book Two', 'Jane Doe', '2003');


console.log(book2);
book2.revise('2017');
console.log(book2);
