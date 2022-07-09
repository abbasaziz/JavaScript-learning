const form= document.getElementById('form');
const email= document.getElementById('email');
const username= document.getElementById('username');
const password= document.getElementById('password');
const password2= document.getElementById('password2');


//show input error message
function showError(input, message){
    const formControl= input.parentElement;
    formControl.className='form-control error';
    const small= formControl.querySelector("small");
    small.innerText = message;
}



//show input success message
function showSuccess(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
}

//check if email is a valid address
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


//event listener
form.addEventListener('submit',function(e){
    e.preventDefault();
    
    if(username.value === ''){
        showError(username, 'Username is required');
    } else {
        showSuccess(username); 
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    } else if (!validateEmail(email.value)){
        showError(email, 'Email is not valid');
    } else {
        showSuccess(email); 
    }

    if(password.value === ''){
        showError(password, 'password is required');
    } else {
        showSuccess(password); 
    }

    if(password2.value === ''){
        showError(password2, 'Reenter the password');
    } else {
        showSuccess(password2); 
    }
})