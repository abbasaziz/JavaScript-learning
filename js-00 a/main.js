// SWITCH
// const x =23;
// const color = x > 10 ? 'red' : 'blue';  // true : not true

// switch (color) {
//     case 'red':
//         console.log('the color is red!!')
//         break;
//     case 'blue':
//         console.log('the color is blue!!')
//         break;
//         default:
//         console.log('color is NOT red or blue!!')
//         break;
// } 

// FUNCTION WRITING

// 1- function addNums(num1, num2) {
//     console.log(num1+num2)
// }
// addNums(1241451, 7);

// 2- OR 
//function addNums(num1, num2) {
//     return(num1+num2);
// }
// console.log(addNums(3,4));

// 3- arrow functions
// const addNums = (num1, num2) => {
//     return num1+num2;
// }
// console.log(addNums(4,1));

// 4- forEach and todo method
// const addNums = (num1, num2) => num1+num2;
// console.log(addNums(4,2));
// todos.forEach((todo)=> console.log(todo));


// OBJECT ORIENTED PROGRAMMING MINI PROJ
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value==''|| emailInput.value==''){
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all required info!';
        setTimeout(() => msg.remove(),3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        
        userList.appendChild(li);  

        nameInput.value='';
        emailInput.value='';

    }   
}



