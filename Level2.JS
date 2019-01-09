"use strict";

//Iteration3

// function fizzBuzz(n, fizz, buzz) {
//     for (let i = 1; i < n + 1; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(fizz + buzz);
//         }
//         else if (i % 3 === 0) {
//             console.log(fizz);
//         }
//         else if (i % 5 === 0) {
//             console.log(buzz);
//         }
//         else {
//             console.log(i);
//         }
//     }
// }

//Iteration4

// function divThree(n) {
//     let count = 0;
//     while (n != 1) {
//         if (n % 3 === 0) {
//             n /= 3;
//             count += 1;
//             console.log(n);
//         }
//         else if (n % 3 === 1) {
//             n = (n - 1) / 3;
//             count += 1;
//             console.log(n);

//         }
//         else {
//             n = (n + 1) / 3;
//             count += 1;
//             console.log(n);
//         }
//     }

//     console.log("iterations: "+count);
// }

//Strings4

// function triples(string){
//     let count = 0;
//     for(let i = 0; i<string.length; i++){
//         if(string[i]===string[i+1]&& string[i+1]===string[i+2]){
//             count+=1;
//         }
//     }
//     console.log(count);
// }

//DOM1

// function createPTag(){
//      pTag = document.createElement("p");
// }

// function changePTag(){
//     let text = document.getElementById("paragraphText").value;
//     text.appendChild(pTag);
// }

// function deletePTag(){
//     pTag.removeChild();
// }

//JSON1

// let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json";
// let request = new XMLHttpRequest();
// request.open("GET", requestURL);
// request.responseType = "json";
// request.send();
// request.onload = function() {
//     let superHeroes = request.response;
//     console.log(JSON.stringify(superHeroes,null,3));
// }

//JSON2

// let requestURL2 = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
// let request2 = new XMLHttpRequest();
// request2.open("GET", requestURL2);
// request2.responseType = "json";
// request2.send();
// var britishKings 
// var britishKings2

// request2.onload = function () {
//     britishKings = request2.response;
//     var britishKings2 = JSON.parse(JSON.stringify(britishKings,null,3));
//     // console.log(britishKings2);
//     console.log(JSON.stringify(britishKings[6]["nm"],null,3))
//     // // console.log(britishKings.length);
//     searchValue();
//     // console.log(britishKings2.length)
// }

// function searchValue() {
//     let searchString = document.getElementById("searchText").value;

// var britishKings2 = britishKings;

//     // var britishKings2 = JSON.parse(JSON.stringify(britishKings,null,3));
//     for (let i = 0; i <= britishKings2.length; i++) {
//         if (JSON.stringify(britishKings2[i]["nm"],null,3)===searchString){
//             console.log(JSON.stringify(britishKings2[i]["nm"],null,3));
//         }
//         else if(britishKings2[3]["cty"]===searchString){
//             console.log(JSON.stringify(britishKings2[i],null,3));
//         }
//         else if(britishKings2[3]["hse"]===searchString){
//             console.log(JSON.stringify(britishKings2[i],null,3));
//         }
//         else if(britishKings2[3]["yrs"]===searchString){
//             console.log(JSON.stringify(britishKings2[i],null,3));
//         }
//        console.log(JSON.stringify(britishKings2[i]["nm"],null,3));
//     }
// }

let requestURL3 = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json";
let request3 = new XMLHttpRequest();
request3.open("GET", requestURL3);
request3.responseType = "json";
request3.send();
var kings
request3.onload = function () {
    kings = request3.response;
    // console.log(kings);
    // console.log(kings[0]);

    // console.log(kings[0].nm);
    // console.log(typeof kings[0].nm);
    // console.log(kings[0].nm===`Edmund lronside`)
    // console.log(kings[0].yrs);
    // console.log(typeof kings[0].yrs);
    // console.log((kings[0].yrs===`1016`));

    searchValue();

}

function searchValue(){
    let searchString = document.getElementById("searchText").value;
    for(let i = 0; i<kings.length; i++ ){
        if(kings[i].nm===searchString){
            console.log(kings[i]);
        }
        if(kings[i].cty===searchString){
            console.log(kings[i]);
        }
        if(kings[i].hse===searchString){
            console.log(kings[i]);
        }
        if(kings[i].yrs===searchString){
            console.log(kings[i]);
        }
    }
}



