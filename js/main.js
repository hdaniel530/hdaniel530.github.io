const accordion = document.getElementsByClassName("container");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    console.log("In click function")
  });
}