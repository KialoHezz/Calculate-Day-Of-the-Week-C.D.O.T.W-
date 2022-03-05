//creating an array
const dayOfTheWeek = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// let genderM = fillinform.gender_male.value;
// let genderF = fillinform.gender_female.value;

//initilaze form=>fillin
const fillinform = document.querySelector("fillin");

// //add eventlistener to form
// fillinform.addEventListener("submit", validateUserInfo);
document.getElementById("submit").addEventListener("submit" validateUserInfo =>{
     //select input of date from form
     let input = document.getElementById("date").value;
     let dateEntered = new Date(input);
     //To ge the day
     const day = dateEntered.getDate();
     console.log(dayOfTheWeek[day]);
})


// function validateUserInfo(event){
//     //to avoid default refresh
//     event.preventDefault();
   
// }


//select gender either male or female from form
let gender = document.querySelectorAll('input[name=gender]');
console.log(gender);

//select form
const form = document.querySelectorAll("form");
console.log(form);




//validate radio buttons
if(genderM .checked == false && genderF.checked == false){
    console.log("Please choose your Gender either Male or Female");
}




// create the function to validate the input when user
// clicks submit button



