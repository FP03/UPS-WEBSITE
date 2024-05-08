document.getElementById("textInput").addEventListener("focus", function () {
  document.getElementById("envelopeIcon").style.color = "lightblue";
});

document.getElementById("textInput").addEventListener("blur", function () {
  document.getElementById("envelopeIcon").style.color = "#000"; // Change back to initial color when focus is lost
});

const passwordInput = document.getElementById("passwordInput");
const eyeIcon = document.getElementById("eyeIcon");

eyeIcon.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("bx-show");
    eyeIcon.classList.add("bx-hide");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("bx-hide");
    eyeIcon.classList.add("bx-show");
  }
});
