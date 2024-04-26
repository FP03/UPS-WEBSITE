document.getElementById("textInput").addEventListener("focus", function () {
  document.getElementById("envelopeIcon").style.color = "lightblue";
});

document.getElementById("textInput").addEventListener("blur", function () {
  document.getElementById("envelopeIcon").style.color = "#000"; // Change back to initial color when focus is lost
});
