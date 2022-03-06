//creating an array
const dayOfTheWeek = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//initilaze form=>fillin
const fillinform = document.querySelector("#fillin");

// //select gender either male or female from form
// let gender = document.querySelectorAll('input[name=gender]');
// console.log(gender);

let gender_female = document.getElementById(genderF);
console.log(gender_female);
let gender_male = document.getElementById(genderM);
console.log(gender_male);


document.getElementById("submit").addEventListener("submit", validateUserInfo =>{
    //to avoid default refresh
    preventDefault();
    //select input of date from form
    let input = document.getElementById("date").value;
    let dateEntered = new Date(input);
    console.log(dateEntered);
    //To ge the day
    const day = dateEntered.getDate();
    return(dayOfTheWeek[day]);
    // have call the function
    chose();
});

function chose(male , female){
    male = fillinform.gender_male.value;
    female = fillinform.gender_female.value;
    //validate radio buttons
    if(male .checked == false && female.checked == false){
        return("Please choose your Gender either Male or Female");
    }
}




