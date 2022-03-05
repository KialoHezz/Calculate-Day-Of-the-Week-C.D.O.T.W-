//creating an array
const dayOfTheWeek = ["Sunday", "Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
 
//Define form=>fillin
const fillin = document.querySelector(form);

//add eventlistener to  submit
const form = form.addEventListener("submit",validateForm);


//function  to validate 

function validateForm(event){
    // event.preventDefault();
    alter("form submitted")
}



