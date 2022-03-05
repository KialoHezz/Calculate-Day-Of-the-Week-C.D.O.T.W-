//select input of date from form
let input = document.getElementById("date").value;
let dateEntered = new Date(input);

//select gender either male or female from form
let gender = document.querySelectorAll('input[name=gender]');

//Define form=>fillin
const fillinform = document.querySelector("fillin");

//add eventlistener to form
fillinform.addEventListener("submit", validateUserInfo);

// create the function to validate the input when user
// clicks submit button

function validateUserInfo(event){
    //to avoid default refresh
    event.preventDefault();
}












// //creating an array
// const dayOfTheWeek = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]



// //function  to validate 

// function validateForm(event){
//     event.preventDefault();
//     const date = document.querySelectorAll("input[name=date]");
//     alter("form submitted");
// }



