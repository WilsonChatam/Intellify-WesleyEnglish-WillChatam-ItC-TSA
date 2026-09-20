// Navigation bar

const aboutUsButton = document.getElementById("aboutUsButton");
aboutUsButton.addEventListener("click", function() {
    window.location.href = "../aboutUs.html";
});

const coursesButton = document.getElementById("coursesButton");
coursesButton.addEventListener("click", function() {
    window.location.href = "../../htmlCode/courses/courses.html";
});

// Div courses

// Text

let isOpenedT = false;
const dropdownTextButton = document.getElementById("dropDownTextButton");
const lessonOneT = document.getElementById("dDT1");
const lessonTwoT = document.getElementById("dDT2");
const breakOneT = document.getElementById("break1T");
const breakTwoT = document.getElementById("break2T");

function willShowT(statusT) {
    lessonOneT.style.display = statusT;
    lessonTwoT.style.display = statusT;
    breakOneT.style.display = statusT;
    breakTwoT.style.display = statusT;
}

willShowT("none");

dropdownTextButton.addEventListener("click", function() {
    if (isOpenedT == false) {
        willShowT("inline");
        isOpenedT = true;
    } else {
        willShowT("none");
        isOpenedT = false;
    }
});

// Programming

let isOpenedP = false;
const dropDownProgrammingButton = document.getElementById("dropDownProgrammingButton");
const lessonOneP = document.getElementById("dDP1");
const lessonTwoP = document.getElementById("dDP2");
const breakOneP = document.getElementById("break1P");
const breakTwoP = document.getElementById("break2P");

function willShowP(statusP) {
    lessonOneP.style.display = statusP;
    lessonTwoP.style.display = statusP;
    breakOneP.style.display = statusP;
    breakTwoP.style.display = statusP;
}

willShowP("none");

dropDownProgrammingButton.addEventListener("click", function() {
    if (isOpenedP == false) {
        willShowP("inline");
        isOpenedP = true;
    } else {
        willShowP("none");
        isOpenedP = false;
    }
});
