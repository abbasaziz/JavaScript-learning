// ES 5 constructor

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
    
}

//instantiate book
const book1= new Book('Book One', 'John Snow', '2015');
const book2= new Book('Book Two', 'Jane Doe', '2003');


console.log(book2);
