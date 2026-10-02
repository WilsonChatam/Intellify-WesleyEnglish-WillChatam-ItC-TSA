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

// Question 2

let isQ2Answered = false;
const tResponseQ2 = document.getElementById("tResponseQ2");
const tQ2A = document.getElementById("tQ2A");
const tQ2B = document.getElementById("tQ2B");
const tQ2C = document.getElementById("tQ2C");
const tQ2D = document.getElementById("tQ2D"); // Correct answer

tQ2A.addEventListener("click", function () {
    if (isQ2Answered == false) {
        tResponseQ2.innerHTML = "I'm sorry, that's incorrect.";
        isQ2Answered = true;
    }
});

tQ2B.addEventListener("click", function() {
    if (isQ2Answered == false) {
        tResponseQ2.innerHTML = "I'm sorry, that's incorrect.";
        isQ2Answered = true;
    }
});

tQ2C.addEventListener("click", function() {
    if (isQ2Answered == false) {
        tResponseQ2.innerHTML = "I'm sorry, that's incorrect.";
        isQ2Answered = true;
    }
});

tQ2D.addEventListener("click", function() {
    if (isQ2Answered == false) {
        tResponseQ2.innerHTML = "You got this question right!";
        isQ2Answered = true;
        questionsGottenRight += 1;
    }
})

// Question 3

let isQ3Answered = false;
const tResponseQ3 = document.getElementById("tResponseQ3");
const tQ3A = document.getElementById("tQ3A"); // Correct answer
const tQ3B = document.getElementById("tQ3B");

tQ3A.addEventListener("click", function() {
    if (isQ3Answered == false) {
        tResponseQ3.innerHTML = "You got this question right!";
        isQ3Answered = true;
        questionsGottenRight += 1;
    }
});

tQ3B.addEventListener("click", function() {
    if (isQ3Answered == false) {
        tResponseQ3.innerHTML = "I'm sorry, that's incorrect.";
        isQ3Answered = true;
    }
})