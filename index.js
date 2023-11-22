let popup = document.getElementById("popup");
let content = document.getElementById("container") 
let submitBtn = document.getElementById("submit") 
let loginForm = document.getElementById("loginForm")
let fname = document.getElementById("fname");
let lname = document.getElementById("lname"); 
let dob = document.getElementById("dob");   
let country = document.getElementById("country");  
let gender = document.getElementById("gender"); 
let email = document.getElementById("email");  
let mobile = document.getElementById("mobile"); 

submitBtn.setAttribute('disabled', 'disabled')

loginForm.addEventListener('input', () => {
    if(fname.value.length > 0 && lname.value.length > 0 && dob.value.length > 0 && country.value.length && gender.value.length && email.value.length && mobile.value.length){
        submitBtn.removeAttribute('disabled');
    }
    else{
        submitBtn.setAttribute('disabled', 'disabled')
    }
})
function closePopup(){
    popup.classList.remove("open-popup");
    content.classList.remove("hide-content")
}

function checkValues(){
    
        popup.classList.add("open-popup");
        content.classList.add("hide-content");
}
