const emailInput = document.getElementById("email");
const emailButton = document.getElementById("email-button");
const errorMessage = document.getElementById("email-error");

emailButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the form from submitting normally
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const userEmail = emailInput.value;

  if (emailRegex.test(email)) {
    errorMessage.style.display = "none";
    window.location.href = `signup.html?email=${encodeURIComponent(userEmail)}`;
  } else {
    errorMessage.style.display = "inline";
  }
});
