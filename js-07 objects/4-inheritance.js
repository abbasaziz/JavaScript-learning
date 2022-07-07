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

function Magazine(title,author, year, month){
    Book.call(this, title, author, year);
    this.month=month;

}

//inherit prototype
Magazine.prototype = Object.create(Book.prototype);


//instantiate mag object
const mag1 = new Magazine ('Mag One', 'John Snow', '2018', 'Jan');




console.log(mag1.getSummary());