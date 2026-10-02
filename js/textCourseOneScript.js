// Navigation bar

const aboutUsButton = document.getElementById("aboutUsButton");
aboutUsButton.addEventListener("click", function() {
    window.location.href = "../html/aboutUs.html";
});

const coursesButton = document.getElementById("coursesButton");
coursesButton.addEventListener("click", function() {
    window.location.href = "../html/courses.html";
});

// Quiz

let questionsGottenRight = 0;

// Question 1

let isQ1Answered = false;
const tResponseQ1 = document.getElementById("tResponseQ1");
const tQ1A = document.getElementById("tQ1A");
const tQ1B = document.getElementById("tQ1B"); // Correct answer
const tQ1C = document.getElementById("tQ1C");
const tQ1D = document.getElementById("tQ1D");

tQ1A.addEventListener("click", function() {
    if (isQ1Answered == false) {
        tResponseQ1.innerHTML = "I'm sorry, that's incorrect.";
        isQ1Answered = true;
    }
});

tQ1B.addEventListener("click", function() {
    if (isQ1Answered == false) {
        tResponseQ1.innerHTML = "You got this question right!";
        isQ1Answered = true;
        questionsGottenRight += 1;
    }
});

tQ1C.addEventListener("click", function() {
    if (isQ1Answered == false) {
        tResponseQ1.innerHTML = "I'm sorry, that's incorrect.";
        isQ1Answered = true;
    }
});

tQ1D.addEventListener("click", function() {
    if (isQ1Answered == false) {
        tResponseQ1.innerHTML = "I'm sorry, that's incorrect.";
        isQ1Answered = true;
    }
});