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
let gender_male = document.getElementById("genderM");
//event listener
fillinform.addEventListener("submit", validateInfo);
//function of submit button
function validateInfo(submit) {
  submit.preventDefault();
  let userDate = document.getElementById("date").value;
  let gender = document.querySelector("input[name='Gender']:checked");
  console.log(userDate, gender.value);
  let dateEntered = new Date(userDate);
  const day = dateEntered.getDay();
  const dayOfTheWeek = daysOfTheWeek[day];
  const akanName = akanNames[gender.value][dayOfTheWeek];
  console.log(akanName, dayOfTheWeek);
  outputToUser(akanName, dayOfTheWeek);
  chose(male, female);
}

//Its function used to display information at front-end
function outputToUser(akanName, day) {
  document.querySelector(".output").innerText = "Your akanName is: " + akanName;
}
