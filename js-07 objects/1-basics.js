// const s1 ="heyyy";
// console.log(typeof s1);


// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// console.log(navigator.appVersion)




//object literals
const book1 = {
    title: 'book One',
    author: 'John Doe',
    year: '2020',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
};

const book2 = {
    title: 'book Two',
    author: 'Jane Doe',
    year: '2011',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in the year ${this.year}`;
    }
};

console.log(book2.getSummary());
console.log(book1.getSummary());