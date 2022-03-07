//creating an array
const dayOfTheWeek = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const birthday = getElementById('date').value;
//create object
let Male_object = {unday: "Kwasi" ,Monday: "Kwadwo" ,Tuesday: "Kwabena" ,Wednesday: "Kwaku" ,Thursday:  "Yaw" ,Friday: "Kofi" ,Saturday: "Kwame"};
let female_object = {Sunday: "Akosua", Monday: "Adwoa", Tuesday: "Abenaa", Wednesday: "Akua", Thursday:  "Yaa", Friday: "Afua", Saturday: "Ama"};

//initilaze form=>fillin
const fillinform = document.querySelector("#fillin");


let gender_female = document.getElementById(genderF).value;
console.log(gender_female);
let gender_male = document.getElementById(genderM).value;
console.log(gender_male);


document.getElementById("submit").addEventListener("submit", validateUserInfo =>{
    //to avoid default refresh
    preventDefault();
    //select input of date from form
    let input = document.getElementById("date").value;
    console.log(input)
    let dateEntered = new Date(input);
    //To ge the day
    const day = dateEntered.getDate();
    return(dayOfTheWeek[day]);
    // have call the function
    chose();
    // correctDate();
    // correctMonth();
});



function chose(male , female){
    male = fillinform.gender_male.value;
    female = fillinform.gender_female.value;
    //validate radio buttons
    if(male.checked == false && female.checked == false){
        return("Please choose your Gender either Male or Female");
    }
      else if (gender_male == "male") {
        return("You're male");
    }
}



//i have commentted this  two function(correctDate and correctMonth) because i have thought they dont have meaning ;already i have provide calender therefore user will select

// //function to valid date
// function correctDate(date){
//     if(date <= 0 && date > 31){
//         return ("Invalid date");
//     }
//     return ("Valid date");
// }

// //function to valid month
// function correctMonth(month){
//     if(month <= 0 && month > 12){
//         return ("Invalid month");
//     }
//     return ("Valid month");

