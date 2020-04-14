let toTopButton = document.getElementById("jumptotop");
toTopButton.addEventListener("click", goToTop);

function goToTop(){
    window.scrollTo(0,0);
}

window.addEventListener('scroll', appear);

function appear(){
    if (window.scrollY > 200) {
        toTopButton.style.display = "block";
    }else{
        toTopButton.style.display = "none";
    } 
}

let submit = document.getElementById("submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");
let alert = document.getElementById("alert")

submit.addEventListener("click", submitForm);
function submitForm(e) {
  e.preventDefault();
  validate(name.value, email.value, message.value);
}

function validate(name,email,message){
    if (name === "" || email === "" || message === "" ){
        alert.innerHTML = "Please complete all fields to submit form.";
        
    } else{
        alert.innerHTML = "";
    }
}
