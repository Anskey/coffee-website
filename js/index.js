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
        /*Send email*/

        emailUrl = "https://hooks.zapier.com/hooks/catch/5963107/o9gm325";
        let emailObj = {
            name: name,
            email: email,
            message: message,
            to: "anskey@gmail.com"
        };

        let emailRequest = new XMLHttpRequest();
        emailRequest.open("POST", emailUrl);
        emailRequest.send(JSON.stringify(emailObj));
    }
}

/*Get coffee price*/

coffeePriceUrl = "https://api.tradingeconomics.com/markets/search/coffee?c=guest:guest&f=json"
let priceRequest = new XMLHttpRequest();
priceRequest.addEventListener("load", processResponse);
priceRequest.open("GET", coffeePriceUrl);
priceRequest.send();
function processResponse (e) {
    e.preventDefault();
    updatePrice(e);
    console.log(JSON.parse(e.target.response));
}

function updatePrice(e){
    document.getElementById("price").innerHTML = "$" + JSON.parse(e.target.response)[0].Last;
}


