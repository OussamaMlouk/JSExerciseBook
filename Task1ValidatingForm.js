"use strict";

function firstNameValidation() {
    let firstName = document.getElementById("firstNameInput").value;
    let alphabet = /^[a-zA-Z]+$/;
    if (firstName === "") {
        alert("First name field is empty.");
        return false;
    }
    else if (!(firstName.match(alphabet))) {
        alert("Invalid name.")
    }
    else {
        return true;
    }
}

function lastNameValidation() {
    let lastName = document.getElementById("lastNameInput").value;
    let alphabet = /^[a-zA-Z]+$/;
    if (lastName === "") {
        alert("Last name field is empty.");
        return false;
    }
    else if (!(lastName.match(alphabet))) {
        alert("Invalid name.")
    }
    else {
        return true;
    }
}

function dobValidation() {
    let dob = document.getElementById("dobInput").value;
    let date = /^(\d{2}\/\d{2}\/\d{2})$/;
    if (dob === "") {
        alert("DOB field is empty.");
    }
    else if (!(dob.match(date))) {
        alert("Invalid DOB.")
    }
    else {
        return true;
    }
}

function addressValidation(){
    let address = document.getElementById("addressInput").value;
    let addressFormat = /^[a-zA-Z0-9\s,'-]*$/;
    if(address === ""){
        alert("Address field is empty.")
    }
    else if(!(address.match(addressFormat))){
        alert("Invalid address.")
    }
    else{
        console.log(true);
        return true;
    }
}

function emailValidation(){
    let email = document.getElementById("emailInput").value;
    let emailFormat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(email === ""){
        alert("Email field is empty.")
    }
    else if(!(email.match(emailFormat))){
        alert("Invalid email.")
    }
    else{
        return true;
    }
}


