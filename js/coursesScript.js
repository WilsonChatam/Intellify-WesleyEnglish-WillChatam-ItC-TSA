// Navigation bar

const aboutUsButton = document.getElementById("aboutUsButton");
aboutUsButton.addEventListener("click", function() {
    window.location.href = "aboutUs.html";
});

const coursesButton = document.getElementById("coursesButton");
coursesButton.addEventListener("click", function() {
    window.location.href = "courses.html";
});

// Courses list

const dropDownTextButton = document.getElementById("dropDownTextButton");
const doesTCOLinkExist = document.getElementById("textCourseOneLink");
dropDownTextButton.addEventListener("click", function() {
    if (doesTCOLinkExist) {
        doesTCOLinkExist.remove();
    } else {
        const textCourseOneLink = document.createElement('a');
        textCourseOneLink.textContent = "COURSE 1";
        textCourseOneLink.href = "../htmlCode/index.html";
        document.body.appendChild(textCourseOneLink);
    }
});
