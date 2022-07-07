class Book {
    constructor (title, author, year) {
        this.title = title;
        this.author= author;
        this.year=year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;

    }

}


//magazine subclasses
class Magazine extends Book {
    constructor(title, author, year, month){
        super(title, author, year, month);
        this.month=month;

    }
}

// instantiate new magazine

const mag1= new Magazine('Mag One', 'John Doe', '2017', 'Aug');
console.log(mag1.getSummary())