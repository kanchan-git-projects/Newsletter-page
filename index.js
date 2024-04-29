const emailInput = document.getElementById("email");
const emailButton = document.getElementById("email-button");
const errorMessage = document.getElementById("email-error");

function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(email)) {
    errorMessage.style.display = "none";
    window.location.href = "signup.html";
  } else {
    errorMessage.style.display = "inline";
  }
}

emailButton.addEventListener("click", validateEmail);
