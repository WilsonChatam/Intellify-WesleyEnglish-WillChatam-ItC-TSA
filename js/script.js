const button = document.getElementById("helloButton");
button.addEventListener("click", function() {
    alert("This was made using JavaScript!");
});

function navBar() {
    const homeButton = document.getElementById("homeButton");
    homeButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });

    const aboutUsButton = document.getElementById("aboutUsButton");
    aboutUsButton.addEventListener("click", function() {
        window.location.href = "aboutUs.html";
    });

    const coursesButton = document.getElementById("coursesButton");
    coursesButton.addEventListener("click", function() {
        window.location.href = "courses.html";
    });
}

navBar();
