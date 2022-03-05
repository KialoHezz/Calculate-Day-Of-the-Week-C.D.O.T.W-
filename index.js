//creating an array
const dayOfTheWeek = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//select gender either male or female from form
let gender = document.querySelectorAll('input[name=gender]');

//initilaze form=>fillin
const fillinform = document.querySelector("#fillin");

// let genderM = fillinform.gender_male.value;
// let genderF = fillinform.gender_female.value;

document.getElementById("submit").addEventListener("submit", validateUserInfo =>{
    //to avoid default refresh
    event.preventDefault();
    //select input of date from form
    let input = document.getElementById("date").value;
    let dateEntered = new Date(input);
    //To ge the day
    const day = dateEntered.getDate();
    console.log(dayOfTheWeek[day]);
    chose();
});

function chose(male , female){
    //validate radio buttons
    if(genderM .checked == false && genderF.checked == false){
        return("Please choose your Gender either Male or Female");
    }
}




