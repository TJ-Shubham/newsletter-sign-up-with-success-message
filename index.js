const emailInput = document.getElementById("email");
const emailId = document.getElementsByClassName("email-id");
const btn = document.querySelector(".btn");
const message = document.querySelector(".message-section");
const forms = document.querySelector(".form-display");
const warning = document.querySelector(".warning");
const retBtn = document.querySelector(".message-btn");

btn.addEventListener("click", function (event) {
  const email = emailInput.value;
  const pattern = /^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}$/;

  if (pattern.test(email)) {
    forms.style.display = "none";
    message.style.display = "block";
    emailId[0].textContent = email;
  } else {
    emailInput.style.borderColor = "red";
    emailInput.style.backgroundColor = "hsl(4, 100%, 94%)";
    emailInput.style.color = "red";
    warning.textContent = "Valid email required";
    warning.style.color = "red";
  }
  event.preventDefault();
});

retBtn.addEventListener("click", function () {
  forms.style.display = "block";
  message.style.display = "none";
  window.location.reload();
});