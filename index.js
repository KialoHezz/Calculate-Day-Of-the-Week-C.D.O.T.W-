//creating an array
const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//create object
const akanNames = {
  male: {
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thursday: "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame",
  },
  female: {
    Sunday: "Akosua",
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thursday: "Yaa",
    Friday: "Afua",
    Saturday: "Ama",
  },
};

//initilaze form=>fillin
const fillinform = document.querySelector("#fillin");

let gender_female = document.getElementById("genderF");
console.log(gender_female);
let gender_male = document.getElementById("genderM");
console.log(gender_male);

fillinform.addEventListener("submit", validateInfo);

function validateInfo(submit) {
  submit.preventDefault();
  let userDate = document.getElementById("date").value;
  let gender = document.querySelector("input[name='Gender']:checked");
  console.log(userDate, gender.value);

  let dateEntered = new Date(userDate);
  //To ge the day
  const day = dateEntered.getDay();
  const dayOfTheWeek = daysOfTheWeek[day]
  const akanName = akanNames[gender.value][dayOfTheWeek]
  console.log(akanName, dayOfTheWeek)
  // return(dayOfTheWeek[day]);
  outputToUser(akanName,dayOfTheWeek);
}

function outputToUser(akanName, day) {
  document.querySelector(".output").innerText = "Your akanName is: " + akanName;
}

function chose(male, female) {
  male = fillinform.gender_male.value;
  female = fillinform.gender_female.value;
  //validate radio buttons
  if (male.checked == false && female.checked == false) {
    return "Please choose your Gender either Male or Female";
  }
}
// chose();

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
// }
