//object of protos
const bookProtos = {
    getSummary: function (){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    },
    getAge: function () {
        const years = (new Date().getFullYear()) -(this.year);
        return `${this.title} is around ${years} years old`;
}
};

// 1- create object

// const book1=Object.create(bookProtos);
// book1.title= 'Book One';
// book1.author= 'john Snow';
// book1.year= '2013';


console.log(book1.getAge())
