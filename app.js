const headsDay = document.querySelectorAll(".head");
const headDay = document.querySelector(".head1");
const headMonth = document.querySelector(".head2");
const headYear = document.querySelector(".head3");
const inputDay = document.querySelector(".input1");
const inputMonth = document.querySelector(".input2");
const inputYear = document.querySelector(".input3");
const button = document.querySelector(".my-btn");
const yearNumber = document.querySelector(".year-number");
const monthNumber = document.querySelector(".month-number");
const dayNumber = document.querySelector(".day-number");
const form = document.querySelector("#form");
const dayError = document.querySelector(".error1");
const monthError = document.querySelector(".error2");
const yearError = document.querySelector(".error3");
const date = new Date();




button.addEventListener("click",function(){

    inputDay.value===""?inputDay.classList.add("error"):console.log("input doldurulub");
    inputDay.value===""?headDay.classList.add("error"):console.log("input doldurulub");
    inputDay.value===""?dayError.textContent="this field is required":console.log("input doldurulub");
    inputDay.value===""?dayError.classList.add("error"):console.log("input doldurulub");

    inputMonth.value===""?inputMonth.classList.add("error"):console.log("input doldurulub");
    inputMonth.value===""?headMonth.classList.add("error"):console.log("input doldurulub");
    inputMonth.value===""?monthError.textContent="this field is required":console.log("input doldurulub");
    inputMonth.value===""?monthError.classList.add("error"):console.log("input doldurulub");

    inputYear.value===""?inputYear.classList.add("error"):console.log("input doldurulub");
    inputYear.value===""?headYear.classList.add("error"):console.log("input doldurulub");
    inputYear.value===""?yearError.textContent="this field is required":console.log("input doldurulub");
    inputYear.value===""?yearError.classList.add("error"):console.log("input doldurulub");


    dayNumber.textContent=Math.abs(date.getDate() - Number(inputDay.value));

    monthNumber.textContent=Math.abs(date.getMonth() - Number(inputMonth.value));

    yearNumber.textContent=Math.abs(date.getFullYear() - Number(inputYear.value));
});