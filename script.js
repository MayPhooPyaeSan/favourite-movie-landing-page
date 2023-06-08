const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLink = document.querySelectorAll(".nav-link");
for (let i = 0; i < navLink.length; i++) {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const username = nameInput.value;

  alert(
    `Welcome to the movie club, ${username}! We'll be in touch as soon as possible. ✌`
  );
  alert("Thank you 🤍");
});
