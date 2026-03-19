const form = document.getElementById("registrationForm");
const table = document.getElementById("participantsTable");
const success = document.getElementById("successMsg");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let dob = document.getElementById("dob");
let event = document.getElementById("event");
let college = document.getElementById("college");
let confirm = document.getElementById("confirm");

let gender = document.querySelector('input[name="gender"]:checked');
let mode = document.querySelector('input[name="mode"]:checked');

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(name.value === ""){
alert("Name cannot be empty");
name.style.borderColor = "red";
return;
}else{
name.style.borderColor = "green";
}

if(!emailPattern.test(email.value)){
alert("Enter valid email");
email.style.borderColor = "red";
return;
}else{
email.style.borderColor = "green";
}

if(phone.value.length !== 10 || isNaN(phone.value)){
alert("Phone number must contain exactly 10 digits");
phone.style.borderColor = "red";
return;
}else{
phone.style.borderColor = "green";
}

if(dob.value === ""){
alert("Select Date of Birth");
return;
}

if(!gender){
alert("Select Gender");
return;
}

if(event.value === ""){
alert("Select Event");
return;
}

if(!mode){
alert("Select Mode of Participation");
return;
}

if(college.value === ""){
alert("Enter College / Company");
return;
}

if(!confirm.checked){
alert("Please confirm that details are correct");
return;
}

let row = table.insertRow();

row.insertCell(0).innerText = name.value;
row.insertCell(1).innerText = email.value;
row.insertCell(2).innerText = phone.value;
row.insertCell(3).innerText = event.value;
row.insertCell(4).innerText = mode.value;

success.innerText = "Registration Successful!";

setTimeout(function(){
success.innerText = "";
},3000);

form.reset();

});
