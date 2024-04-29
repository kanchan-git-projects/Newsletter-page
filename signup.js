// Extract the email from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const userEmail = urlParams.get("email");
const dismiss = document.getElementById("dismiss");

// Display the email on the success page
document.getElementById("userEmail").textContent = userEmail;

dismiss.addEventListener("click", function () {
  window.location.href = "index.html";
});
